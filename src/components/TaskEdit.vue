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
        const titleRef = ref('')
        const descriptionRef = ref('')
        watch(() => props.task, (oldValue) => {
            titleRef.value = oldValue.title ? oldValue.title : ''
            descriptionRef.value = oldValue.description ? oldValue.description : ''
        }, { immediate: true })

        function submitHandler() {
            if (titleRef.value === '') return
            emit('save', {
                id: props.task.id,
                title: titleRef.value,
                desc: descriptionRef.value
            })
        }
        function deleteHandler() {
            const res = window.confirm("Are you sure to delete this task?");
            if (res) emit('delete', props.task.id)
        }

        return {
            titleRef,
            descriptionRef,
            submitHandler,
            deleteHandler
        }
    }
}
</script>
<template>
    <h1 class="task__title">{{ task.title }}</h1>
    <form @submit.prevent="submitHandler">
        <div class="form-control">
            <label for="title">Title:</label>
            <input id="title" type="text" v-model="titleRef" required/>
        </div>
        <div class="form-control">
            <label for="desc">Description:</label>
            <textarea id="desc" rows="4" v-model="descriptionRef" />
        </div>
        <div class="task__actions">
            <button class="button button--delete" type="button" @click="deleteHandler">
                <span>Delete</span>
                <fa icon="trash" />
            </button>
            <button class="button" type="submit">
                <span>Save</span>
                <fa icon="save" />
            </button>
        </div>
    </form>
</template>

<style lang="postcss" scoped>
.task__title {
    @apply text-xl font-bold truncate;
    @apply dark:text-slate-200;
}

.form-control {
    @apply flex flex-col justify-between items-start
}
label {
    @apply font-bold text-sm text-gray-700;
    @apply dark:text-slate-200;
}
input, textarea {
    @apply p-2 border-2 border-green-600 shadow-sm rounded w-full;
    @apply focus:border-green-500;
    @apply dark:bg-slate-600 dark:text-slate-200;
}

.task__actions {
    @apply flex justify-between items-center
}
.button {
    @apply px-4 py-2 text-white bg-green-600 rounded shadow-sm border-2 border-transparent w-full m-2 flex justify-around items-center;
    @apply hover:text-green-600 hover:bg-white hover:border-green-600 duration-300;
    @apply dark:bg-slate-700 dark:border-green-600;
}
.button--delete {
    @apply bg-red-600 my-2;
    @apply hover:text-red-600 hover:border-red-600;
    @apply dark:border-red-600;
}
</style>