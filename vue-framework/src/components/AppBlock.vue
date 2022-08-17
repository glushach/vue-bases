<template>
  <div class="container">
    <app-alert
        v-if="alert"
        title="Attention!"
        text="This is the very important message, be careful"
        @close="alert = false"
    ></app-alert>
    
    <div class="card">
      <div class="btn primary" @click="toggleAlert">{{alert ? 'Hidden' : 'Display'}} message</div>
    </div>
  </div>
</template>


<script>
  import AppAlert from "./AppAlert";
  export default {
    data() {
      return {
        alert: false
      }
    },
    methods: {
      toggleAlert() {
        this.alert = !this.alert
      }
    },
    components: { AppAlert }
  }
</script>

<style scoped>

</style>
