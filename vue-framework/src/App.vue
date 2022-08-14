<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данних</h2>
      
      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name">
      </div>
      
      <button class="btn primary"
              :disabled="name.length === 0"
      >Создать человека</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    async createPerson() {
      // https://vue-with-http-b1149-default-rtdb.firebaseio.com/people.json
      // this.name
      
      const response = await fetch('https://vue-with-http-b1149-default-rtdb.firebaseio.com/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.name
        })
      });
      
      const firebaseData = await response.json();
      this.name = '';
      console.log(firebaseData)
    }
  },
}
</script>

<style scoped>

</style>
