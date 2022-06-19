Vue.createApp({
  // data() {
  //   return {
  //
  //   }
  // }

  data: () => ({
    myHtml: '<h1>Vue 3 App</h1>',
    title: 'Я есть Грут',
    person: {
      firstName: 'Alex',
      lastName: 'Solomonic',
      age: 27
    },
    items: [1, 2]
  }),
  methods: {
    addItem(event) {
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = '';
      console.log(event.key)
    }
  },
  computed: {
    eventItems() {
      return this.items.filter(i => i % 2 === 0);
    }
  }
}).mount('#app');