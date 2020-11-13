import path from 'path'

const alias = (originalPath) => path.resolve(__dirname, originalPath)
const aliases = (config) => {
  config.resolve.alias.components = alias('./components')
  config.resolve.alias.helpers = alias('./helpers')
  config.resolve.alias.utils = alias('./utils')
  config.resolve.alias.pages = alias('./pages')
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'poc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // env targets
  env: {
    storybookPages: 'Pages',
    storybookComponents: 'Components',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Config storybook/nuxt
  storybook: {
    addons: [
      '@storybook/addon-controls',
      '@storybook/addon-notes',
      {
        name: '@storybook/addon-storysource',
        options: {
          rule: {
            // test: [/\.stories\.jsx?$/], This is default
            include: [path.resolve(__dirname, '../src')], // You can specify directories
          },
          loaderOptions: {
            prettierConfig: { printWidth: 80, singleQuote: false },
            injectStoryParameters: false,
          },
        },
      },
      {
        name: '@storybook/addon-docs',
        options: {
          sourceLoaderOptions: {
            injectStoryParameters: false,
          },
        },
      },
    ],
    stories: ['~/stories/**/*.stories.@(js|mdx)'],
  },

  // Files generate - exclude dir
  generate: {
    exclude: [
      /^\/stories/
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    filenames : {
      app: '[name].js',
      chunk: '[name].js',
      css: '[name].css',
    },
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'entry',
            corejs: 3
          }
        ]
      ],
      plugins: ['@babel/transform-runtime']
    },
    webpackFinal(config) {
      aliases(config)

      return config
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    filenames: {
      chunk: () => '[name].js',
      css: () => '[name].css',
    },
    extractCSS: true,
    extend(config, { loaders: { vue }, ...ctx }) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
      aliases(config)

      return config
    },
  },
}
