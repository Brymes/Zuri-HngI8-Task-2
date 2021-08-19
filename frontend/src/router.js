import { createWebHistory, createRouter } from "vue-router";

const routes = [
  /*   {
    path: "/",
    component: Login,
  }, */
  // { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
