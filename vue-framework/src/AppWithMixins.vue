<template>
  <div class="container">
    <app-alert
        v-if="alert"
        title="Attention!"
        text="This is the very important message, be careful"
        type="warning"
        closable
        @close="alert = false"
    ></app-alert>
    
    <div class="card">
      <div class="btn primary" @click="toggleAlert">{{alert ? 'Hidden' : 'Display'}} message</div>
    </div>
    
    <app-block></app-block>
  </div>
</template>


<script>
  import AppAlert from "./components/AppAlert";
  import AppBlock from "./components/AppBlock";
  import alertMixin from "./alertMixin";

  export default {
    mixins: [alertMixin],
    components: { AppAlert, AppBlock }
  }
</script>

<style scoped>

</style>
