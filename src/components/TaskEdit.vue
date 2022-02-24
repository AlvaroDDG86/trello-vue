<script>
import { ref, watch } from "vue"

export default {
    name: 'TaskEdit',
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    setup(props, { emit }) {
        const descriptionRef = ref('')
        watch(() => props.task, (oldValue) => {
            descriptionRef.value = oldValue.description ? oldValue.description : ''
        }, { immediate: true })

        function submitHandler(event) {
            event.preventDefault()
            emit('save', {
                id: props.task.id,
                desc: descriptionRef.value
            })
        }
        function deleteHandler() {
            const res = window.confirm("Are you sure to delete this task?");
            if (res) emit('delete', props.task.id)
        }

        return {
            descriptionRef,
            submitHandler,
            deleteHandler
        }
    }
}
</script>
<template>
    <h1 class="task__title">{{ task.title }}</h1>
    <form @submit="submitHandler">
        <div class="form-control">
            <label for="desc">Description:</label>
            <textarea id="desc" rows="4" v-model="descriptionRef" />
        </div>
        <div class="task__actions">
            <button class="button button--delete" type="button" @click="deleteHandler">
                Delete
            </button>
            <button class="button" type="submit">
                Save
            </button>
        </div>
    </form>
</template>

<style lang="postcss" scoped>
.task__title {
    @apply text-xl font-bold text-center
}

.form-control {
    @apply flex flex-col justify-between items-start
}
label {
    @apply font-bold text-sm text-gray-700
}
textarea {
    @apply p-2 border-2 border-green-600 shadow-xl rounded w-full;
    @apply focus:border-green-500
}

.task__actions {
    @apply flex justify-between items-center
}
.button {
    @apply px-4 py-2 text-white bg-green-600 rounded shadow-sm border-2 border-transparent w-full m-2;
    @apply hover:text-green-600 hover:bg-white hover:border-green-600;
}
.button--delete {
    @apply px-4 py-2 text-white bg-red-600 rounded shadow-sm border-2 border-transparent w-full my-2;
    @apply hover:text-red-600 hover:bg-white hover:border-red-600;
}
</style>