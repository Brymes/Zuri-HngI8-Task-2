import { createApp } from "vue";
import App from "./App.vue";

import { FontAwesomeIcon } from "./plugins/font-awesome";

import "./index.css";
// import "tailwindcss/tailwind.css";

const app = createApp(App);

app
  /* .use(router)
  .use(store) */
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
