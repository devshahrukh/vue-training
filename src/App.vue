<template>
  <div id="app">
    <h1>{{name}}</h1>
    <company-name :parent-name="name" @eventEmitted="childMethod"/>
  </div>
</template>

<script>

import CompanyName from './components/CompanyName'
import generalMixins from './mixins/general'

export default {
  name: 'App',
  mixins: [generalMixins],
  components: {CompanyName},
  data() {
    return {
      name: 'This is text coming from state of App.vue as a Prop for a component',
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
    },
    childMethod (data) {
      this.name = data.eventParam
      console.log('Event Clicked', data)
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
