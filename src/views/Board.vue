<script>
import { ref, computed } from 'vue'
import { boardStore } from '../stores/board'
import { uiStore } from '../stores/ui'
// Components
import Column from "../components/Column.vue"
import ColumnNew from "../components/ColumnNew.vue"
import Modal from '../components/Modal.vue'
import TheAside from '../components/TheAside.vue'
import TaskEdit from '../components/TaskEdit.vue'

export default {
    name: 'Table',
    components: {
        TheAside,
        Column,
        ColumnNew,
        Modal,
        TaskEdit
    },
    setup() {
        const store = boardStore()
        const storeUi = uiStore()
        const columns = computed(() => store.columns)
        const widthBoard = computed(() => storeUi.asideOpen ? '16rem' : '2rem')
        const showModal = ref(false)
        const taskEdit = ref(null)

        store.$subscribe((mutation, state) => {
            localStorage.setItem('board', JSON.stringify(state.columns))
        })
        function toggleModal() {
            showModal.value = false
        }
        function selectTask(task) {
            showModal.value = true
            taskEdit.value = task
        }
        function createHandler(name) {
            store.addColumn(name)
        }
        function removeHandler(id) {
            store.removeColumn(id)
        }
        function createTaskHandler(payload) {
            store.addTask(payload)
        }
        function saveHandler(payload) {
            showModal.value = false
            store.editTask(payload)
        }
        function removeTaskhandler(id) {
            showModal.value = false
            store.removeTask(id)
        }
        function moveTaskHandler(data) {
            store.moveTask(data)
        }
        function moveTaskInColumnHandler(data) {
            store.moveTaskInColumn(data)
        }
        function moveColumnHandler(data) {
            store.moveColumn(data)
        }
        return {
            columns,
            showModal,
            widthBoard,
            taskEdit,
            selectTask,
            toggleModal,
            createHandler,
            removeHandler,
            saveHandler,
            createTaskHandler,
            removeTaskhandler,
            moveTaskHandler,
            moveTaskInColumnHandler,
            moveColumnHandler
        }
    }
}
</script>
<template>
    <div class="content">
        <TheAside />
        <div class="content__columns">
            <Column
                v-for="(column, idx) of columns"
                :key="idx"
                :column="column"
                @remove="removeHandler"
                @moveTask="moveTaskHandler"
                @moveTaskInColumn="moveTaskInColumnHandler"
                @moveColumn="moveColumnHandler"
                @selectTask="selectTask"
                @createTask="createTaskHandler"
                />
            <ColumnNew @create="createHandler"/>
        </div>
    </div>
    <Modal v-if="showModal" @close="toggleModal">
        <TaskEdit
            :task="taskEdit"
            @save="saveHandler"
            @delete="removeTaskhandler"
        />
    </Modal> 
</template>
<style lang="postcss" scoped>
.content {
  @apply w-full overflow-auto bg-blue-500 relative duration-300;
  @apply dark:bg-blue-900;
  width: calc(100vw - v-bind(widthBoard));
  min-height: calc(100vh - 4rem);
}

.content__columns {
  @apply flex flex-row items-start justify-start p-8 w-fit;
}
</style>