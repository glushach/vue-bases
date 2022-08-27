<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{$store.state.counter}}</h2>
      <button class="btn" @click="increment">Add</button>
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
    increment() {
      // this.counter++;
      this.$store.commit('increment')
    }
  }
}
</script>
