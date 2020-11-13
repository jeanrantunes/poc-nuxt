<template>
  <a href="https://nuxtjs.org" endpoint="https://endpoint.com">
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
}
</script>
