import AppPrice from "./components/AppPrice.vue";
import AppNews from "./components/AppNews.vue";

export const routes = [
  {
    path: "/",
    component: AppPrice,
    name: "price",
  },
  {
    path: "/news",
    component: AppNews,
    name: "news",
  },
];
