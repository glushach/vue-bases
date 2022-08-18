<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>This is title of modal</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid amet animi, aperiam culpa cumque ipsum rem sint suscipit veniam.</p>
  </div>
</template>

<script>
  export default {
    emits: ['close']
  }
</script>

<style scoped>

</style>
