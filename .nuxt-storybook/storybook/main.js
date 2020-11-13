const stories = ['../../components/**/*.stories.@(ts|js)','../../pages/**/*.stories.@(js|mdx)']
const addons  = ["@storybook\u002Faddon-essentials","@storybook\u002Faddon-controls","@storybook\u002Faddon-notes",(function(a){return {name:"@storybook\u002Faddon-storysource",options:{rule:{include:["\u002FUsers\u002Fjeanrantunes\u002FDocuments\u002FPossible\u002Fdll\u002Fpoc\u002Fpoc-nuxt\u002Fsrc"]},loaderOptions:{prettierConfig:{printWidth:80,singleQuote:a},injectStoryParameters:a}}}}(false)),{name:"@storybook\u002Faddon-docs",options:{sourceLoaderOptions:{injectStoryParameters:false}}}]

function nuxifyStorybook(storybookConfig) {
  return {
    ...storybookConfig,
    webpackFinal(config, options) {
      if (options.nuxtStorybookConfig) {
        config = options.nuxtStorybookConfig.webpackFinal(config, options)
      }
      if (typeof storybookConfig.webpackFinal === 'function') {
        config = storybookConfig.webpackFinal(config, options)
      }
      return config
    },
    stories: [
      ...stories,
      ...storybookConfig.stories
    ],
    addons: [
      ...addons,
      ...storybookConfig.addons
    ],
  }
}

module.exports = {
  webpackFinal(config, options) {
    return options.nuxtStorybookConfig.webpackFinal(config, options)
  },
  stories,
  addons,
  nuxifyStorybook
}
