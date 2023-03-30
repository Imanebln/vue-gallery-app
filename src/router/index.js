import Vue from "vue";
import VueRouter from "vue-router";
import GalleryView from "../views/GalleryView.vue";
import GalleryShowItem from "../views/GalleryShowItem.vue";
import NotFound from "../components/NotFound.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: NotFound,
  },
  {
    path: "/",
    name: "home",
    component: GalleryView,
  },
  {
    path: "/details/:id",
    name: "details",
    component: GalleryShowItem,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
