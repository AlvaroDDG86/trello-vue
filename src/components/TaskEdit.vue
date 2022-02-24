<script>
import { ref, watch, watchEffect } from "vue"

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

        return {
            descriptionRef,
            submitHandler
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
        <button class="button" type="submit">
            Save
        </button>
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
.button {
    @apply px-4 py-2 text-white bg-green-600 rounded shadow-sm border-2 border-transparent w-full my-2;
    @apply hover:text-green-600 hover:bg-white hover:border-green-600;
}
</style>