import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import { BootstrapVue,NavbarPlugin , IconsPlugin } from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import i18n from './plugins/i18n'
import FlagIcon from 'vue-flag-icon';
import 'bootstrap/dist/css/bootstrap.css'
/* import 'bootstrap-vue/dist/bootstrap-vue.css' */

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(NavbarPlugin)
Vue.use(VueI18n)
Vue.use(FlagIcon)

new Vue({
  render: h => h(App),
  store,
  i18n
}).$mount('#app')
