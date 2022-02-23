<script>
import { useStore } from './stores/main'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    return {
      store
    }
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <pre>{{ store }}</pre>
</template>

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
