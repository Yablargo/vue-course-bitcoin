import AppPrice from "./components/AppPrice.vue";
import AppNews from "./components/AppNews.vue";
import AppChart from "./components/AppChart.vue";

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
  {
    path: "/chart",
    component: AppChart,
    name: "chart",
  },
];
