<script>
export default {
    name: 'Task',
    props: {
        task: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
<template>
<div class="task">
    <h4 class="task__title">{{ task.title }}</h4>
    <p v-if="task.description" class="task__desc">
        {{ task.description }}
    </p>
</div>
</template>
<style lang="postcss" scoped>
.task {
    @apply bg-white px-2 py-1 rounded-lg my-4 cursor-pointer shadow-md;
    @apply hover:bg-slate-100
}
.task__title {
    @apply text-xl font-semibold text-gray-800 text-center
}

.task_description {
    @apply text-sm
}
</style>