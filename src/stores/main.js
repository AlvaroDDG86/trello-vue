import { defineStore } from "pinia";
import data from "../api/data";
const defaultBoard = data.columns

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export const mainStore = defineStore("main", {
  state: () => ({
    data: board
  }),
  actions: {
    addColumn(name) {
      this.data.push({ title: name, tasks: []})
    },
    addTask({ title, column }) {
      this.data.forEach(element => {
        if (element.title === column) {
          element.tasks.push({
            title: title,
            description: null,
            id: Math.random().toString()
          })
        }
      });
    },
    editTask({ id, desc }) {
      this.data.forEach(element => {
        element.tasks.forEach(task => {
          if (task.id === id) {
            task.description = desc
          }
        })
      });
    }
  }
})