<script>
import { mainStore } from '../stores/main'
import Column from "../components/Column.vue"
import Modal from '../components/Modal.vue'
import TaskEdit from '../components/TaskEdit.vue'
import { ref, computed } from 'vue'
export default {
    name: 'Table',
    components: {
        Column,
        Modal,
        TaskEdit
    },
    setup() {
        const store = mainStore()
        const columns = computed(() => store.data)
        const showModal = ref(false)
        const taskEdit = ref(null)

        store.$subscribe((state) => {
            localStorage.setItem('board', JSON.stringify(state))
        })
        function toggleModal() {
            showModal.value = false
        }
        function selectTask(task) {
            showModal.value = true
            taskEdit.value = task
        }
        return {
            columns,
            showModal,
            taskEdit,
            selectTask,
            toggleModal
        }
    }
}
</script>
<template>
    <div class="content">
        <div v-if="columns.length > 0" class="content__columns">
            <Column v-for="(column, idx) of columns" :key="idx" :column="column" @selectTask="selectTask" />
        </div>
        <div v-else>
            There is no columns
        </div>
    </div>
    <Modal v-if="showModal" @close="toggleModal">
        <TaskEdit :task="taskEdit" />
    </Modal> 
</template>
<style lang="postcss" scoped>
.content {
  @apply w-full overflow-auto bg-blue-500 relative;
  min-height: calc(100vh - 4rem);
}

.content__columns {
  @apply flex flex-row items-start justify-around p-8;
}
</style>