<template>
  <div
    class="container"
    endpoint="http://www.json-generator.com/api/json/get/bVtsGgEuTC"
    keys='[{"key1":"value"},{"key2":"value"}]'
  >
    <div>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
import { getAttr, getAttrJson } from '~/helpers/tagAttributes'

export default {
  data() {
    return {
      endpoint: '',
      keys: [],
      content: {},
    }
  },
  async mounted() {
    this.keys = getAttrJson(this, 'keys')
    this.endpoint = getAttr(this, 'endpoint')

    this.content = await this.$axios.$get(this.endpoint)
  },
}
</script>
