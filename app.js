const App = {
  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Ссписок заметок'
    }
  }
};



Vue.createApp(App)
.mount('#app');