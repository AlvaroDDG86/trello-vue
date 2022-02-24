<script>
import { mainStore } from '../stores/main'
import Column from "../components/Column.vue"
import { computed } from 'vue'
export default {
    name: 'Table',
    components: {
        Column
    },
    setup() {
        const store = mainStore()
        const columns = computed(() => store.data)

        store.$subscribe((mutation, state) => {
            localStorage.setItem('board', JSON.stringify(state))
        })
        return {
            columns
        }
    }
}
</script>
<template>
    <div class="content">
        <div v-if="columns.length > 0" class="content__columns">
            <Column v-for="(column, idx) of columns" :key="idx" :column="column" />
        </div>
        <div v-else>
            There is no columns
        </div>
    </div>
</template>
<style lang="postcss" scoped>
.content {
  @apply w-full overflow-auto bg-blue-500;
  min-height: calc(100vh - 4rem);
}

.content__columns {
  @apply flex flex-row items-start justify-around p-8;
}
</style>