import { createRouter, createWebHashHistory } from "vue-router";
import Board from '../views/Board.vue'

const routes = [{
    path: "/",
    component: Board
}];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router