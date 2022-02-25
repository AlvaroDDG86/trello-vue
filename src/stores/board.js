import { defineStore } from "pinia";
import data from "../api/data";
import { UID } from "../utils/idGenerator";
const defaultBoard = data.columns


const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export const boardStore = defineStore("board", {
  state: () => ({
    columns: board
  }),
  actions: {
    addColumn(name) {
      this.columns.push({
        id: UID(),
        title: name,
        tasks: []
      })
    },
    removeColumn(id) {
      this.columns = this.columns.filter(column => column.id !== id)
    },
    moveColumn({ columnId, columnToId }) {
      const indexToMove = this.columns.findIndex(col => col.id === columnToId)
      const indexFromMove = this.columns.findIndex(col => col.id === columnId)
      const columnToMove = this.columns.splice(indexFromMove, 1)[0]
      this.columns.splice(indexToMove, 0, columnToMove)
    },
    addTask({ title, columnId }) {
      this.columns.forEach(col => {
        if (col.id === columnId) {
          col.tasks.push({
            title: title,
            description: null,
            id: UID()
          })
        }
      });
    },
    editTask({ id, desc, title }) {
      this.columns.forEach(element => {
        element.tasks.forEach(task => {
          if (task.id === id) {
            task.title = title
            task.description = desc
          }
        })
      });
    },
    moveTask({ columnFromId, columnToId, taskId }) {
      let currentTask
      this.columns.forEach(col => {
        if (col.id === columnFromId) {
          const idx = col.tasks.findIndex(task => task.id === taskId)
          currentTask = col.tasks.splice(idx, 1)[0]
        }
      })
      this.columns.forEach(col => {
        if (col.id === columnToId) {
          col.tasks.push(currentTask)
        }
      })
    },
    moveTaskInColumn({ taskId, taskToId, columnToId, columnFromId }) {
      if (columnToId !== columnFromId) {
        this.moveTask({
          columnFromId,
          columnToId,
          taskId
        })
      } else {
        this.columns.forEach(col => {
          if (col.id === columnToId) {
            const idxTo = col.tasks.findIndex(task => task.id === taskToId)
            const idxFrom = col.tasks.findIndex(task => task.id === taskId)
            const currentTask = col.tasks.splice(idxFrom, 1)[0]
            col.tasks.splice(idxTo, 0, currentTask)
          }
        })
      }
    },
    removeTask(id) {
      this.columns.forEach(element => {
        element.tasks = element.tasks.filter(task => task.id !== id)
      });
    }
  }
})