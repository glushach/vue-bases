<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api </h1>
      <small>data, methods, computed, watch</small>
      <div class="form-control">
        <input type="text" v-model="firstName">
      </div>
      
      <button class="btn" @click="changeInfo">Изменить</button>
      
      <FrameforkInfo
          @change-version="changeVersion"
          class="test-from-app"
      >
        <template>
          <p>This is footer</p>
        </template>
      </FrameforkInfo>
    </div>
  </div>
</template>

<script>
  import {
    ref,
    reactive,
    toRefs,
    isRef,
    isReactive,
    computed,
    watch,
    provide,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    
  } from 'vue';

  import FrameforkInfo from "./FrameforkInfo";
  
  export default {
    setup() {
      const name = ref('VueJS')
      const version = ref(3)
      const textInput = ref(null)
      const firstName = ref('')

      console.log('created')
      
      onBeforeMount(() => {
        console.log('onBeforeMount')
      });
      
      onMounted(() => {
        console.log('onMounted')
      })
      
      onBeforeUpdate(() => {
        console.log('onBeforeUpdate')
      })
      
      onUpdated(() => {
        console.log('onUpdated')
      })
      
      onBeforeUnmount(() => {
        console.log('onBeforeUnmount')
      })
      
      onUnmounted(() => {
        console.log('onUnmounted')
      })
      
      watch(firstName, (newV, oldV) => {
        console.log(newV)
        // console.log(oldV)
      })

      function changeInfo() {
        name.value = 'Vue JS!'
        version.value = 42

      }
      
      function changeVersion(num) {
        version.value = num;
      }
      
      provide('name', name)
      provide('version', version)

      return {
        changeInfo,
        firstName,
        changeVersion
      }
    },
    components: {FrameforkInfo}
  }
</script>
