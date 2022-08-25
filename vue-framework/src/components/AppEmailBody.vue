<template>
  <div>{{email}}</div>
  <div v-if="email">
    <h2>{{email.theme}}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum odio quis soluta sunt velit?</p>
    <button class="btn">Закрыть</button>
  </div>
  <div v-else>
    <h4>Choose letter</h4>
  </div>
</template>

<script>
export default {
  inject: ['emails'],
  props: ['id'],
  computed: {
    email() {
      return this.emails.find(e => e.id === this.id)
    }
  }
}
</script>

<style scoped>

</style>
