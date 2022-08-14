<template>
  <div v-if="people.length !== 0">
    <div class="card" v-for="person in people">
      <h3>{{person}}</h3>
    </div>
  </div>
  <div class="card center" v-else>
    <h4>Людей пока нет.</h4>
    <div class="btn" @click="$emit('load')">Загрузить список</div>
  </div>
</template>

<script>
  export default {
    emits: ['load'],
    props: ['people']
  }
</script>

<style scoped>

</style>
