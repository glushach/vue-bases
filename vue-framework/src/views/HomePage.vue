<template>
  <app-alert
      v-if="alert"
      title="Working with Composition"
      type="danger"
      @close="close"
  >
  </app-alert>
  <div class="card">
    <h1>Vue Composition Api </h1>
    <small>data, methods, computed, watch</small>
    <div class="form-control">
      <input type="text" v-model="firstName">
    </div>
    
    <button class="btn" @click="changeInfo">Изменить</button>
    <button class="btn danger" @click="toggle">Alert</button>
    
    <FrameforkInfo
        @change-version="changeVersion"
        class="test-from-app"
    >
      <template>
        <p>This is footer</p>
      </template>
    </FrameforkInfo>
  </div>
</template>

<script>
  import FrameforkInfo from "../FrameforkInfo";
  import AppAlert from "./AppAlert";
  import {
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted,
    onUnmounted,
    onUpdated,
    provide,
    ref,
    watch
  } from "vue";
  
export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')
    const alert = ref(false)

    const toggle = () => alert.value = !alert.value;
    const close = () => alert.value = false;

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
      changeVersion,
      alert,
      toggle,
      close
    }
  },
  components: {FrameforkInfo, AppAlert}
}
</script>

<style scoped>

</style>
