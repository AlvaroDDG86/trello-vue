<script>
import Task from "./Task.vue"
export default {
    name: 'Column',
    components: {
        Task
    },
    props: {
        column: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
<template>
<section class="column">
    <h3 class="column__title">{{ column.title }}</h3>
    <Task v-for="(task, idx) in column.tasks" :key="idx" :task="task" />
</section>
</template>
<style lang="postcss" scoped>
.column {
    min-width: 350px;
    @apply bg-slate-200 shadow-xl px-2 py-1 rounded-lg mx-4;
}
.column__title {
    @apply text-2xl font-bold;
}
</style>