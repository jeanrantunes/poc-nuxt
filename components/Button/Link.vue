<template>
  <a href="https://nuxtjs.org" ref="anchor" endpoint="https://endpoint.com">
    NuxtJs - {{ title }}
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  mounted() {
    console.log(this.$el)
  },
}
</script>
