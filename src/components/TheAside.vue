<script>
import { computed } from "vue"
import { uiStore } from "../stores/ui"
import { useDark, useToggle } from '@vueuse/core'
export default {
    name: 'TheAside',
    setup() {
        const isDark = useDark()
        const toggleDarkHandler = useToggle(isDark)
        const store = uiStore()
        const icon = computed(() => isDark.value ? 'moon' : 'sun')
        const isOpen = computed(() => store.asideOpen)
        const direction = computed(() => store.asideOpen ? 'angles-right' : 'angles-left')
        const widthAside = computed(() => store.asideOpen ? '16rem' : '2rem')
        function toggleHanlder() {
            store.toggleAside()
        }
        return {
            direction,
            widthAside,
            icon,
            isOpen,
            toggleHanlder,
            toggleDarkHandler
        }
    }
}
</script>
<template>
<aside class="aside">
    <button class="aside__direction" @click="toggleHanlder"><fa :icon="direction" /></button>
    <div v-show="isOpen">
        <button class="aside__toggle" @click="toggleDarkHandler">
            <fa :icon="icon" />
        </button>
    </div>
</aside>
</template>
<style lang="postcss">
.aside {
    @apply bg-blue-800 fixed right-0 z-30 drop-shadow-sm duration-300 flex justify-center items-center overflow-hidden;
    width: v-bind(widthAside);
    min-height: calc(100vh - 4rem);
}

.aside__direction {
    @apply w-8 h-8 rounded text-white shadow-sm font-bold flex justify-center items-center absolute top-0 left-0
}

.aside__toggle {
    @apply text-yellow-500 bg-blue-400 px-4 py-2 rounded shadow;
    @apply dark:text-yellow-700 dark:bg-blue-900
}
</style>