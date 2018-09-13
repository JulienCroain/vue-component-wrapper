# vue-transparent-wrapper

It's a sample to how wrap a component like a v-text-field and pass all props to it.

To simply wrap a component create a new one and use the mixin like this sample.

```html
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
```
