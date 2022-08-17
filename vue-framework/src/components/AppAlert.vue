<template>
  <div class="alert" :class="type">
    <div class="alert-title">{{title}}</div>
    <p>{{text}}</p>
    <button class="btn" :class="type" v-if="closable" @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    text: String,
    title: String,
    closable: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return ['priamry', 'danger', 'warning'].includes(value)
      }
    }
  }
}
</script>

<style scoped>

</style>
