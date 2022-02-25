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
        
        function dragstartHandler(event) {
            
            emit('drag-task', props.taks.id)
        }

        return {
            clickHandler,
            dragstartHandler
        }
    }
}
</script>
<template>
<div
    class="task"
    @click="clickHandler"
    :data-id="task.id"
    >
    <h4 class="task__title">{{ task.title }}</h4>
    <p v-if="task.description" class="task__desc">
        {{ task.description }}
    </p>
</div>
</template>
<style lang="postcss" scoped>
.task {
    @apply bg-white px-2 py-1 rounded my-4 cursor-pointer shadow-md select-none;
    @apply hover:bg-slate-100 duration-300;
    @apply dark:bg-slate-800 dark:text-slate-100;
}
.task__title {
    @apply text-xl font-semibold text-gray-800 truncate;
    @apply dark:text-slate-100;
}

.task_description {
    @apply text-sm
}
</style>