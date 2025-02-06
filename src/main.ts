import "./assets/base.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import Navbar from "./components/Navbar.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("Navbar", Navbar);

app.config.globalProperties.$project_name = "CodingProjectsV2";
app.config.globalProperties.$navbar_buttons = [
    { name: "Мои курсы", href: "/learn", current: true },
    { name: "Магазин", href: "/shop", current: false },
];
app.config.globalProperties.$user_links = [
  { name: "Профиль", href: "#" },
  { name: "Настройки", href: "#" },
  { name: "Выйти", href: "#" },
];

app.mount("#app");
