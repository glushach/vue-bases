<template>
  <header class="navbar">
    Counter {{counter}}
    <button class="btn primary" @click="add">Add 5</button>
  </header>
</template>

<script>
  export default {
    computed: {
      counter() {
        return this.$store.state.counter;
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
