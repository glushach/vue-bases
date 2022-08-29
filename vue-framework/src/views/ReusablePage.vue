<template>
  <app-alert
      v-if="alert"
      title="Working with Composition"
      type="primary"
      @close="close"
  >
  </app-alert>
  
  <div class="card">
    <h1>Reusable</h1>
    
    <button class="btn primary" @click="toggle">{{alert ? 'Close': 'Show'}} message</button>
    <button class="btn" @click="navigate">Go home</button>
  </div>
</template>

<script>
  import {useRouter, useRoute} from 'vue-router'
  import AppAlert from "./AppAlert";
  import {useAlert} from "../use/alert";
  
export default {
  setup() {
    const { alert, close, toggle} = useAlert();
    const router = useRouter();
    const route = useRoute();

    const navigate = () => router.push('/');
    
    return {
      alert,
      toggle,
      navigate,
      close
    }
  },
  components: {AppAlert}
}
</script>

<style scoped>

</style>
