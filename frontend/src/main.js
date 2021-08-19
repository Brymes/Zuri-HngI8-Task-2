import { createApp } from "vue";
import App from "./App.vue";

import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import { Vue as VueIntegration } from "@sentry/integrations";

import router from "./router.js";
import store from "./store";
import { FontAwesomeIcon } from "./plugins/font-awesome";

// FIXME import "./index.css";
import "tailwindcss/tailwind.css";

const app = createApp(App);

Sentry.init({
  dsn: "{DSN URL}",
  debug: true,
  integrations: [
    new VueIntegration({ Vue: app, attachStacktrace: true, logErrors: true }),
    new Integrations.BrowserTracing(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.config.errorHandler = (err, vm, info) => {
  console.log(vm);
  console.log(info);
  Sentry.captureException(err);
};

app
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

window.addEventListener("error", (event) => {
  Sentry.captureException(event);
});
window.addEventListener("unhandledrejection", (event) => {
  Sentry.captureException(event);
});
