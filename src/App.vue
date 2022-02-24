<script>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
export default {
  name: 'App',
  components: {
    TheHeader
  },
  setup() {
    
  }
}
</script>

<template>
  <TheHeader />
  <router-view></router-view>
</template>

<style lang="postcss">
#app {
  @apply w-full h-screen;
}
</style>
