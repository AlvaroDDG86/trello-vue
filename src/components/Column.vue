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
            if (taskName.value === '') return
            emit('create-task', {
                title: taskName.value,
                column: props.column.title
            })
            taskName.value = ''
        }
        function removeHandler() {
            const res = window.confirm("Are you sure to delete this column?");
            if (res) emit('remove', props.column.title)
        }
        return {
            taskName,
            enterHandler,
            removeHandler
        }
    }
}
</script>
<template>
<section class="column">
    <h3 class="column__title">{{ column.title }}</h3>
    <button class="column__remove" @click="removeHandler">-</button>
    <Task v-for="(task, idx) in column.tasks" :key="idx" :task="task" @select="$emit('select-task', $event)" />
    <input class="column__input" @keyup.enter="enterHandler" v-model="taskName" type="text" placeholder="New task" required>
</section>
</template>
<style lang="postcss" scoped>
.column {
    min-width: 350px;
    max-width: 450px;
    @apply bg-slate-200 shadow-xl px-2 py-1 rounded mx-4 relative;
}
.column__title {
    @apply text-2xl font-bold;
}
.column__remove {
    @apply absolute top-1 right-1 text-white bg-red-400 rounded w-7 h-7 shadow-xl
}
.column__input {
    @apply px-3 py-2 rounded bg-black bg-opacity-10 w-full outline outline-offset-0 outline-0 mt-4;
}
</style>