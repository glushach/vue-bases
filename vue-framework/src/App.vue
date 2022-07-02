<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Астуальные новости {{now}}</h2>
    </div>
    
    <div class="card" v-for="item in news" :key="item">
      <h3>{{item}}</h3>
      <button class="btn" @click="isOpen = !isOpen">Открыть</button>
      <p v-if="isOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore, facere. Amet animi eligendi eos eveniet excepturi, facilis fugit id libero magni omnis provident quae quibusdam reprehenderit saepe, ut, veniam.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      isOpen: false,
      news: [
        'Джо Банден победили на выборах в США',
        'Vue 3 успешно работает'
      ]
    }
  }
}
</script>

<style>

</style>
