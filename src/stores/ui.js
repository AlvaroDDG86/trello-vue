import { defineStore } from "pinia";
export const uiStore = defineStore("ui", {
  state: () => ({
    asideOpen: true
  }),
  actions: {
    toggleAside() {
      this.asideOpen = !this.asideOpen
    }
  }
})