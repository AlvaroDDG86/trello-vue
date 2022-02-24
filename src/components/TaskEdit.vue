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
    setup(props) {
        const descriptionRef = ref('')
        watch(() => props.task, (oldValue) => {
            descriptionRef.value = oldValue.description ? oldValue.description : ''
        }, { immediate: true })

        return {
            descriptionRef
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
    </form>
</template>

<style lang="postcss" scoped>
.task__title {
    @apply text-xl font-bold text-center
}

.form-control {
    @apply flex flex-col justify-between items-center
}
label {
    @apply font-bold text-sm text-gray-700
}
textarea {
    @apply p-2 border-2 border-green-300 shadow-xl rounded;
    @apply focus:border-green-500
}
</style>