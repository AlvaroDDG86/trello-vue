<script>
import { ref } from 'vue'
import Modal from './components/Modal.vue'
import TheHeader from './components/TheHeader.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    Modal
  },
  setup() {
    const showModal = ref(true)
    function toggleModal() {
      showModal.value = !showModal.value
    }

    return {
      showModal,
      toggleModal
    }
  }
}
</script>

<template>
  <TheHeader />
  <router-view></router-view>
  <Modal v-if="showModal" @close="toggleModal" />
</template>

<style lang="postcss">
#app {
  @apply w-full h-screen;
}
</style>
