<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>
    
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
    
    <app-people-list
        :people="people"
        @load="loadPeople"
        @remove="removePerson"
    ></app-people-list>
  </div>
</template>


<script>
  
import AppPeopleList from "./AppPeopleList";
import AppAlert from "./AppAlert";
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      people: [],
      alert: null
    }
  },
  mounted() {
    this.loadPeople();
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
      this.people.push({
        firstName: this.name,
        id: firebaseData.name
      });
      this.name = '';
    },
    async loadPeople() {
      try {
        const {data} = await axios.get('https://vue-with-http-b1149-default-rtdb.firebaseio.com/people.json');
        if (!data) {
          throw new Error('List of people is empty')
        }
         this.people = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
      } catch (e) {
        this.alert = {
          type: 'danger',
          title: "Error",
          text: e.message
        }
        console.log(e.message)
      }
      
    },
    async removePerson(id) {
      await axios.delete(`https://vue-with-http-b1149-default-rtdb.firebaseio.com/people/${id}.json`);
      this.people = this.people.filter(person => person.id !== id)
    }
  },
  components: { AppPeopleList, AppAlert },
}
</script>

<style scoped>

</style>
