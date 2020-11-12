export { default as Logo } from '../../components/Logo.vue'
export { default as Input } from '../../components/Input/Input.vue'
export { default as Link } from '../../components/Button/Link.vue'
export { default as Form } from '../../components/Form/Form.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyInput = import('../../components/Input/Input.vue' /* webpackChunkName: "components/Input/Input" */).then(c => c.default || c)
export const LazyLink = import('../../components/Button/Link.vue' /* webpackChunkName: "components/Button/Link" */).then(c => c.default || c)
export const LazyForm = import('../../components/Form/Form.vue' /* webpackChunkName: "components/Form/Form" */).then(c => c.default || c)
