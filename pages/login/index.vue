<template>
  <div
    class="container"
    endpoint="https://poc-dll.free.beeceptor.com/test"
    keys='[{"key1":"value"},{"key2":"value"}]'
  >
    <div>
      <h1 class="title">{{ content }}</h1>
    </div>
  </div>
</template>

<script>
// import Button from '@/components/Button/Link'
import { getAttr, getAttrJson } from '~/helpers/tagAttributes'
// import { STORIES_HEADING_PAGES } from '~/utils/constants'

export default {
  components: {
    // Button,
  },
  data() {
    return {
      endpoint: '',
      keys: [],
      content: {},
    }
  },
  mounted() {
    this.keys = getAttrJson(this, 'keys')
    this.endpoint = getAttr(this, 'endpoint')

    this.getLogin(this.endpoint)
  },
  methods: {
    async getLogin(res) {
      const response = await this.$axios.$get(res)
      this.content = response
    },
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
