import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import { BootstrapVue, NavbarPlugin, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import i18n from "./plugins/i18n";
import FlagIcon from "vue-flag-icon";
import routes from "./router/index";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
/* import 'bootstrap-vue/dist/bootstrap-vue.css' */

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(NavbarPlugin);
Vue.use(VueRouter);
Vue.use(FlagIcon);

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: "TaskList",
      });
    } else {
      next();
    }
  } else {
    next();
  }
}),
  axios.interceptors.request.use(function(config) {
    config.headers.common = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    return config;
  });

new Vue({
  render: (h) => h(App),
  store,
  i18n,
  router,
}).$mount("#app");
