var generalMixins = {
  data() {
    return {
      config: 'Config coming from Mixins',
      sameData: 'sameData'
    }
  },
  filters: {
    suffixmixins (val) {
      return `${val}-MIXINS`
    }
  }
}

export default generalMixins