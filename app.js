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
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    deleteNote(idx) {
      this.notes = this.notes.filter((item, i) => i !== idx);
    }
  }
};



Vue.createApp(App)
.mount('#app');