<template>
  <header class="navbar">
    <strong>Counter {{counter}}</strong>
    <button class="btn" @click="add">Add 5</button>
  </header>
</template>

<script>
  export default {
    computed: {
      counter() {
        return this.$store.getters.counter;
      }
    },
    methods: {
      add() {
        // this.$store.commit('add', 5);
        this.$store.commit({
          type: 'add',
          value: 5
        })
      }
    }
  }
</script>
