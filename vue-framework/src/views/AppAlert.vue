<template>
  <div class="alert" :class="type" @click="$emit('close')">
    <div class="alert-title">{{title}}</div>
    Lorem ipsum dolor sit amet, consectetur adipisicing.
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: ['title', 'type']
}
</script>

<style scoped>

</style>
