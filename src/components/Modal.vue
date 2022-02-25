<script>
export default {
    name: 'Modal',
    setup(_ , { emit }) {
        function close() {
            emit('close')
        }
        return {
            close
        }
    }
};
</script>
<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal">
            <header class="modal__header">
                <button
                type="button"
                class="btn-close"
                @click="close"
                >
                <fa icon="circle-xmark" />
                </button>
            </header>

            <section class="modal__body">
                <slot>
                </slot>
            </section>
            </div>
        </div>
    </transition>
</template>
<style lang="postcss" scoped>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.modal-backdrop {
  @apply fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10;
}

.modal {
  @apply bg-white shadow-sm overflow-x-auto flex flex-col z-20 w-80 rounded;
}

.modal__header{
  @apply p-4 flex;
}

.modal__header {
  @apply justify-between relative;
}

.modal__body {
  @apply relative py-4 px-3;
}

.btn-close {
  @apply absolute top-0 right-0 border-0 text-xl p-3 font-bold text-green-600 bg-transparent;
}

.btn-green {
  @apply text-white bg-green-600 border;
}
</style>