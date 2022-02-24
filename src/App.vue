<script>

import TheHeader from './components/TheHeader.vue'
export default {
  name: 'App',
  components: {
    TheHeader
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
