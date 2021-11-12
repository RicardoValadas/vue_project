import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import UsersDetail from "../views/UsersDetail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/users/:id",
    name: "UsersDetail",
    props: true,
    component: UsersDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
