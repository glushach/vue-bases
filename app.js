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
    items: [1, 2, 3, 4, 5]
  })
}).mount('#app');