<script>
import { mainStore } from '../stores/main'
import Column from "../components/Column.vue"
import ColumnNew from "../components/ColumnNew.vue"
import Modal from '../components/Modal.vue'
import TaskEdit from '../components/TaskEdit.vue'
import { ref, computed } from 'vue'
export default {
    name: 'Table',
    components: {
        Column,
        ColumnNew,
        Modal,
        TaskEdit
    },
    setup() {
        const store = mainStore()
        const columns = computed(() => store.data)
        const showModal = ref(false)
        const taskEdit = ref(null)

        store.$subscribe((mutation, state) => {
            localStorage.setItem('board', JSON.stringify(state.data))
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
        function removeHandler(name) {
            store.removeColumn(name)
        }
        function createTaskHandler(payload) {
            store.addTask(payload)
        }
        function saveHandler(payload) {
            showModal.value = false
            store.editTask(payload)
        }
        return {
            columns,
            showModal,
            taskEdit,
            selectTask,
            toggleModal,
            createHandler,
            removeHandler,
            saveHandler,
            createTaskHandler
        }
    }
}
</script>
<template>
    <div class="content">
        <div class="content__columns">
            <Column
                v-for="(column, idx) of columns"
                :key="idx"
                :column="column"
                @remove="removeHandler"
                @selectTask="selectTask"
                @createTask="createTaskHandler"
                />
            <ColumnNew @create="createHandler"/>
        </div>
    </div>
    <Modal v-if="showModal" @close="toggleModal">
        <TaskEdit :task="taskEdit" @save="saveHandler" />
    </Modal> 
</template>
<style lang="postcss" scoped>
.content {
  @apply w-full overflow-auto bg-blue-500 relative;
  min-height: calc(100vh - 4rem);
}

.content__columns {
  @apply flex flex-row items-start justify-start p-8;
}
</style>