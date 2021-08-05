import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import { BootstrapVue, NavbarPlugin, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import i18n from "./plugins/i18n";
import FlagIcon from "vue-flag-icon";
import router from "./router/index";
import "bootstrap/dist/css/bootstrap.css";
import Vuelidate from 'vuelidate'
/* import 'bootstrap-vue/dist/bootstrap-vue.css' */

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(NavbarPlugin);
Vue.use(VueRouter);
Vue.use(FlagIcon);
Vue.use(Vuelidate)

/* axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`; */

new Vue({
  render: (h) => h(App),
  store,
  i18n,
  router,
}).$mount("#app");
