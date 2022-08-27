<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{counter}} ({{doubleCounter}})</h2>
      <button class="btn primary" @click="add">Add</button>
      <button class="btn danger" @click="incrementAsync({
        value: 10,
        delay: 200
      })">Add 10</button>
    </div>
  </div>
<!--  <button @click="increment">Increase</button> &lt;!&ndash; it is local state because it works inside component&ndash;&gt;-->
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'
import TheNavbar from './TheNavbar'

export default {
  components: {TheNavbar},
  computed: mapGetters(['counter', 'doubleCounter']),
  methods: {
    ...mapMutations({add: 'increment'}),
    ...mapActions(['incrementAsync']),
  }
}
</script>
