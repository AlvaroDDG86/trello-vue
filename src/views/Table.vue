<script>
import { useStore } from '../stores/main'
import Column from "../components/Column.vue"
export default {
    name: 'Table',
    components: {
        Column
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
    <div class="content">
        <div class="content__columns">
            <Column v-for="(column, idx) of store.data" :key="idx" :column="column" />
        </div>
    </div>
</template>
<style lang="postcss" scoped>
.content {
    @apply w-full overflow-auto bg-blue-500;
    min-height: calc(100vh - 4rem);
}

.content__columns {
    @apply flex flex-row items-start justify-around;
}
</style>