import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n)
const messages = {
    'en': {},
    'vi': {},
    'jp': {}
}

const i18n = new VueI18n({
    locale: 'vi', // set locale
    fallbackLocale: 'vi', // set fallback locale
    messages, // set locale messages
  });
  
export default i18n;