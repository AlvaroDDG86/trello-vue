<script>
import { ref } from "vue"
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
    },
    setup(props, { emit }) {
        const taskName = ref('')
        function enterHandler() {
            emit('create-task', {
                title: taskName.value,
                column: props.column.title
            })
            taskName.value = ''
        }
        return {
            taskName,
            enterHandler
        }
    }
}
</script>
<template>
<section class="column">
    <h3 class="column__title">{{ column.title }}</h3>
    <Task v-for="(task, idx) in column.tasks" :key="idx" :task="task" @select="$emit('select-task', $event)" />
    <input class="column__input" @keyup.enter="enterHandler" v-model="taskName" type="text" placeholder="New task">
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
.column__input {
    @apply px-3 py-2 rounded bg-black bg-opacity-10 w-full outline outline-offset-0 outline-0;
}
</style>