<template>
  <div>
    <v-text-field
        v-bind="$attrs"
        v-model="dataValue"
        v-on="listeners" />
  </div>
</template>

<script>
import mixin from '../mixins/ComponentWrapper.js'

export default {
  name: 'my-v-text-field',
  mixins: [mixin]
}
</script>

<style scoped>
</style>
