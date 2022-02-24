<script>
import { computed } from "vue"
import { uiStore } from "../stores/ui"
export default {
    name: 'TheAside',
    setup() {
        const store = uiStore()
        const direction = computed(() => store.asideOpen ? '>>' : '<<')
        const widthAside = computed(() => store.asideOpen ? '16rem' : '2rem')
        function toggleHanlder() {
            store.toggleAside()
        }
        return {
            direction,
            widthAside,
            toggleHanlder
        }
    }
}
</script>
<template>
<aside class="aside">
    <button class="aside__direction" @click="toggleHanlder">{{ direction }}</button>
</aside>
</template>
<style lang="postcss">
.aside {
    @apply bg-blue-800 fixed right-0 z-30 drop-shadow-sm duration-300;
    width: v-bind(widthAside);
    min-height: calc(100vh - 4rem);
}

.aside__direction {
    @apply w-8 h-8 rounded text-white bg-gray-700 shadow-sm font-bold
}
</style>