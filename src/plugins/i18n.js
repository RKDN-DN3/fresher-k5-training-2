import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n)
const messages = {
    'en': {
      welcomeMsg:' Wellcome multi langua',
      listTitle:'Todo list',
      placeholder: 'Add new task todo...',
      button: {
        btnDemo: 'Click',
        btnAdd:'Add Task',
        btnCompleted:'Completed'
        }
    },
    'vi': {
      welcomeMsg:'Demo đa ngôn ngữ',
      listTitle:'Những việc cần làm',
      placeholder: 'Thêm công việc...',
      button: {
        btnDemo: 'Nhấn vào',
        btnAdd:'Thêm',
        btnCompleted:'Hoàn Thành'
        }
    },
    'jp': {
      welcomeMsg:'タスクの追加',
      listTitle:'やる事',
      placeholder: 'タスクの追加...',
      button: {
        btnDemo: '追加',
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