<template>
  <div class="card">
    <h1>Reusable</h1>
    
    <button class="btn primary">Show message</button>
    <button class="btn" @click="navigate">Go home</button>
  </div>
</template>

<script>
  import {useRouter, useRoute} from 'vue-router'
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    console.log(route.path)
    
    const navigate = () => {
      console.log(route)
      router.push('/')
    }
    
    return {
      navigate
    }
  }
}
</script>

<style scoped>

</style>
