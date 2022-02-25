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
    moveTask({ columnFromId, columnToId, taskId}) {
      let currentTask
      this.data.forEach(col => {
        if (col.id === columnFromId) {
          currentTask = col.tasks.splice(taskId, 1)
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