import { defineStore } from "pinia";
import data from "../api/data";

export const useStore = defineStore("main", {
  state: () => {
    return {
        data
    };
  },
});
