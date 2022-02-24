import { createRouter, createWebHashHistory } from "vue-router";
import Board from '../views/Board.vue'
import User from '../views/User.vue'

const routes = [
  {
    path: "/",
    component: Board
  },
  {
    path: "/user",
    component: User
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router