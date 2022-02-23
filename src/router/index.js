import { createRouter, createWebHashHistory } from "vue-router";
import Table from '../views/Table.vue'

const routes = [{
    path: "/",
    component: Table
}];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router