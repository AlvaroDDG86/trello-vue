import { defineStore } from "pinia";
import data from "../api/data";
const defaultBoard = data.columns

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export const mainStore = defineStore("main", {
  state: () => {
    return {
        data: board
    };
  }
})