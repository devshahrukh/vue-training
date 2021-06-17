<template>
  <div id="app">
    <h1>MIxins and App Same Data - {{sameData}}</h1>

    <h1><i>New name</i> - {{name}}</h1>
    <h1><i>Old name</i> - {{oldName || 'Default'}}</h1>

    <p>Name Property: {{name | reverseString}}</p>
    <h1><strong>Configurations: </strong>{{config | suffixmixins}}</h1><h1></h1>
    <span>Array Length - {{arrayLength}}</span> <br>

    <button @click="clickMe">Click to Change</button> <br>
    <input type="text" v-model="name">


    <p v-for="(name, index) in names" :key="index">
      <span v-if="index % 2 === 0">{{index}} - {{name | upperCaseLetters | suffixmixins}} - Even</span>
      <span v-else-if="index % 2 > 0">{{index}} - {{name | lowerCaseLetters}} - Odd</span>
    </p>
  </div>
</template>

<script>
import generalMixins from './mixins/general.js'

export default {
  name: 'App',
  mixins: [generalMixins],
  data() {
    return {
      name: 'Bold Text',
      oldName: '',
      age: 11,
      sameData: 'OverrideData',
      names: ['Shah', 'Rahul', 'Ramesh', 'Vinovve', 'valueCoders', 'Shah']
    }
  },
  computed: {
    // get only
    arrayLength() {
      return this.names.length
    }
  },
  watch: {
    name (newValue, oldValue) {
      this.oldName = oldValue
      console.log('newValue, oldValue', newValue, oldValue)
    }
  },
  methods: {
    clickMe () {
      this.name = `Vinove text`
    },
    getName () {
      return this.name
    }
  },
  filters: {
    upperCaseLetters (val) {
      return val.toUpperCase()
    },
    lowerCaseLetters (val) {
      return val.toLowerCase()
    },
    reverseString (val) {
      return 'Interpolation' + val
    }
  },
  beforeCreate () {
    console.log('beforeCreate', this.name)
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
