<template>
  <div>
    <v-text-field
        v-bind="$attrs"
        solo
        @blur="onBlur"
        v-model="dataValue"
        v-on="$listeners" />
  </div>
</template>

<script>
import mixin from '../mixins/ComponentWrapper.js'

export default {
  name: 'my-v-text-field',
  mixins: [mixin],
  methods: {
    onBlur() {
      console.log('onBlur')
    }
  }
}
</script>

<style scoped>
</style>
