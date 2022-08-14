<template>
  <div v-if="people.length !== 0">
    <div class="card inline" v-for="person in people" :key="person.id">
      <h3>{{person.firstName}}</h3>
      <div class="btn danger" @click="$emit('remove', person.id)">Delete</div>
    </div>
  </div>
  <div class="card center" v-else>
    <h4>Людей пока нет.</h4>
    <div class="btn" @click="$emit('load')">Загрузить список</div>
  </div>
</template>

<script>
  export default {
    emits: ['load', 'remove'],
    props: ['people']
  }
</script>

<style scoped>
  .inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
