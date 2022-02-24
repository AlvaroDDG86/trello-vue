<script>
import { useStore } from './stores/main'
import TheHeader from './components/TheHeader.vue'
export default {
  name: 'App',
  components: {
    TheHeader
  },
  setup() {
    const store = useStore()
    return {
      store
    }
  }
}
</script>

<template>
  <TheHeader />
  <router-view></router-view>
</template>

<style lang="postcss">
#app {
  @apply w-screen h-screen bg-blue-500;
}
</style>
