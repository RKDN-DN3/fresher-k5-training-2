import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n)
const messages = {
    'en': {
      listTitle:'Todo list',
      placeholder: 'Add new task todo...',
      button: {
        btnAdd:'Add Task',
        btnCompleted:'Completed'
        }
    },
    'vi': {
      listTitle:'Những việc cần làm',
      placeholder: 'Thêm công việc...',
      button: {
        btnAdd:'Thêm',
        btnCompleted:'Hoàn Thành'
        }
    },
    'jp': {
      listTitle:'やる事',
      placeholder: 'タスクの追加...',
      button: {
        btnAdd:'追加',
        btnCompleted:'完了'
        }
    }
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'vn', // set fallback locale
    messages, // set locale messages
  });
  
export default i18n;