<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{$store.getters.counter}} ({{$store.getters.doubleCounter}})</h2>
      <button class="btn primary" @click="add">Add</button>
      <button class="btn danger" @click="incrementAsync">Add 10</button>
    </div>
  </div>
<!--  <button @click="increment">Increase</button> &lt;!&ndash; it is local state because it works inside component&ndash;&gt;-->
</template>

<script>
import TheNavbar from './TheNavbar'
export default {
  components: {TheNavbar},
  // data() {
  //   return {
  //     counter: 0
  //   }
  // },
  methods: {
    add() {
      // this.counter++;
      this.$store.commit('increment')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync', {
        value: 10,
        delay: 200
      })
    }
  }
}
</script>
