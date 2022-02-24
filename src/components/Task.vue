<script>
export default {
    name: 'Task',
    props: {
        task: {
            type: Object,
            default: () => {}
        }
    },
    setup(props, { emit }) {
        function clickHandler() {
            emit('select', props.task)
        }

        return {
            clickHandler
        }
    }
}
</script>
<template>
<div class="task" @click="clickHandler">
    <h4 class="task__title">{{ task.title }}</h4>
    <p v-if="task.description" class="task__desc">
        {{ task.description }}
    </p>
</div>
</template>
<style lang="postcss" scoped>
.task {
    @apply bg-white px-2 py-1 rounded my-4 cursor-pointer shadow-md;
    @apply hover:bg-slate-100 duration-300;
}
.task__title {
    @apply text-xl font-semibold text-gray-800 truncate;
}

.task_description {
    @apply text-sm
}
</style>