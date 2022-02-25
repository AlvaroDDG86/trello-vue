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
                columnId: props.column.id
            })
            taskName.value = ''
        }
        function removeHandler() {
            const res = window.confirm("Are you sure to delete this column?");
            if (res) emit('remove', props.column.id)
        }
        function dropHandler(event) {
            event.preventDefault();
            if (!event.srcElement.classList.contains('column')) return
            let taskId = event.dataTransfer.getData("task-id");
            if (taskId) {
                let columnFromId = event.dataTransfer.getData("from-column-id");
                emit('move-task', {
                    columnFromId,
                    taskId,
                    columnToId: event.target.dataset.id
                })
            } else {
                const columnId =  event.dataTransfer.getData('column-id')
                console.log(event.target.dataset.id)
                emit('move-column', {
                    columnId,
                    columnToId: event.target.dataset.id
                })
            }
            event.dataTransfer.clearData()
        }
        function dropTaskHandler(event) {
            event.preventDefault();
            if (!event.currentTarget.classList.contains('task')) return
            let taskId = event.dataTransfer.getData("task-id");
            let columnFromId = event.dataTransfer.getData("column-id");
            emit('move-task-in-column', {
                taskId,
                taskToId: event.currentTarget.dataset.id,
                columnToId: props.column.id,
                columnFromId
            })
        }
        function dragstartColumnHandler(event, columnId) {
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.setData('column-id', columnId)
        }
        function dragstartHandler(event, taskId) {
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.setData('task-id', taskId)
            event.dataTransfer.setData('from-column-id', props.column.id)
        }
        return {
            taskName,
            enterHandler,
            removeHandler,
            dropHandler,
            dropTaskHandler,
            dragstartHandler,
            dragstartColumnHandler
        }
    }
}
</script>
<template>
<section 
    :draggable="true"
    @drop="dropHandler"
    @dragover.prevent
    @dragstart="dragstartColumnHandler($event, column.id)"
    :data-id="column.id"
    class="column">
    <h3 class="column__title">{{ column.title }}</h3>
    <button class="column__remove" @click="removeHandler">
        <fa icon="trash" />
    </button>
    <Task
        v-for="(task, idx) in column.tasks"
        :key="idx"
        :task="task"
        :draggable="true"
        @drop="dropTaskHandler"
        @dragover.prevent
        @dragstart="dragstartHandler($event, task.id)"
        @select="$emit('select-task', $event)"
    />
    <input class="column__input" @keyup.enter="enterHandler" v-model="taskName" type="text" placeholder="New task" required>
</section>
</template>
<style lang="postcss" scoped>
.column {
  min-width: 350px;
  max-width: 450px;
  @apply bg-slate-200 shadow-xl px-2 py-1 rounded mx-4 relative cursor-move;
  @apply dark:bg-slate-700 dark:text-slate-200;
}
.column__title {
  @apply text-2xl font-bold;
}
.column__remove {
  @apply absolute top-1 right-1 text-white bg-red-400 rounded w-7 h-7 shadow-xl;
  @apply dark:bg-red-900
}
.column__input {
  @apply px-3 py-2 rounded bg-black bg-opacity-10 w-full outline outline-offset-0 outline-0 mt-4;
}
</style>