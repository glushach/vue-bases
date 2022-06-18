const App = {
  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Ссписок заметок',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2', 'Заметка 3']
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addHewNote() {
      this.notes.push(this.inputValue);
      this.inputValue = '';
    },
    inputKeyPress(event) {
      if (event.key === 'Enter') {
        this.addHewNote()
      }
    },

  }
};



Vue.createApp(App)
.mount('#app');