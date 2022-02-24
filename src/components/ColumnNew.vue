<script>
import { ref } from "vue"
import Task from "./Task.vue"
export default {
    name: 'ColumnNew',
    setup() {
        const columnName = ref('')
        function enterHandler() {
            console.log(columnName.value)
            columnName.value = ''
        }
        return {
            columnName,
            enterHandler
        }
    }
}
</script>
<template>
<section class="column-new">
    <h3 class="column-new__title">Add new column</h3>
    <input class="column-new__input" @keyup.enter="enterHandler" v-model="columnName" type="text" placeholder="New column name...">
</section>
</template>
<style lang="postcss" scoped>
.column-new {
    min-width: 350px;
    @apply bg-slate-200 shadow-xl px-2 py-1 rounded-lg mx-4;
}
.column-new__title {
    @apply text-2xl font-bold mb-4;
}
.column-new__input {
    @apply px-3 py-2 rounded bg-black bg-opacity-10 w-full outline outline-offset-0 outline-0;
}
</style>