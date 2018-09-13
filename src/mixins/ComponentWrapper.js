export default {
  data: function() {
    return {
      dataValue: this.value
    }
  },
  props: {
    value: String
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function(newValue) {
        this.dataValue = newValue
      }
    }
  }
}
