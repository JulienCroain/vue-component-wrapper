<template>
  <div class="hello">
    <h1>Value = {{ msg }}</h1>
    <my-v-text-field
      v-model="msg"
      placeholder="PlaceHolder" />
    <input v-model="msg">
  </div>
</template>

<script>
import MyVTextField from './MyVTextField'
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      msg: 'Test'
    }
  },
  components: {
    MyVTextField
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  border: solid 1px rgba(0, 0, 0, 0.12);
}
</style>
