import { defineStore } from "pinia";
import data from "../api/data";
import { UID } from "../utils/idGenerator";
const defaultBoard = data.columns


const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export const mainStore = defineStore("main", {
  state: () => ({
    data: board
  }),
  actions: {
    addColumn(name) {
      this.data.push({
        id: UID(),
        title: name,
        tasks: []
      })
    },
    removeColumn(id) {
      this.data = this.data.filter(column => column.id !== id)
    },
    moveColumn({ columnId, columnToId }) {
      const indexToMove = this.data.findIndex(col => col.id === columnToId)
      const indexFromMove = this.data.findIndex(col => col.id === columnId)
      const columnToMove = this.data.splice(indexFromMove, 1)[0]
      this.data.splice(indexToMove, 0, columnToMove)
    },
    addTask({ title, columnId }) {
      this.data.forEach(col => {
        if (col.id === columnId) {
          col.tasks.push({
            title: title,
            description: null,
            id: UID()
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
    },
    moveTask({ columnFromId, columnToId, taskId }) {
      let currentTask
      this.data.forEach(col => {
        if (col.id === columnFromId) {
          const idx = col.tasks.findIndex(task => task.id === taskId)
          currentTask = col.tasks.splice(idx, 1)[0]
        }
      })
      this.data.forEach(col => {
        if (col.id === columnToId) {
          col.tasks.push(currentTask)
        }
      })
    },
    removeTask(id) {
      this.data.forEach(element => {
        element.tasks = element.tasks.filter(task => task.id !== id)
      });
    }
  }
})