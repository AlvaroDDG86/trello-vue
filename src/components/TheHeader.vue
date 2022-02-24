<script>
export default {
    name: 'TheHeader'
}
</script>
<template>
<nav class="navbar">
    <div class="text-4xl font-bold">
        Trello Vue
    </div>
    <div class="navabar__menu">
        <router-link class="navbar__link" to="/">Table</router-link>
        <router-link class="navbar__link" to="/user">User</router-link>
    </div>
</nav>
</template>
<style lang="postcss" scoped>
.navbar {
    @apply w-full h-16 bg-green-600 text-white flex justify-between items-center py-4 px-2 sticky top-0;
}
.navabar__menu {
    @apply flex justify-evenly items-center border-white border-2;
}
.navbar__link {
    @apply font-bold hover:text-green-800 hover:bg-slate-50 hover:shadow-2xl cursor-pointer px-2 py-1;
}
</style>