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
          :name="name"
          :version="version"
          @change-version="changeVersion"
      />
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
    watch
  } from 'vue';

  import FrameforkInfo from "./FrameforkInfo";
  
  export default {
    setup() {
      const name = ref('VueJS')
      const version = ref(3)
      const textInput = ref(null)
      const firstName = ref('')

      // const doubleVersion = computed(() => {
      //   return version.value * 2
      // })
      
      // watch([doubleVersion, name], (newValues, oldValues) => {
      //   console.log('new version', newValues[0])
      //   console.log('new', newValues[1])
      //   console.log('old version', oldValues[0])
      //   console.log('old name', oldValues[1])
      // });
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

      return {
        name, version,
        changeInfo,
        firstName,
        changeVersion
      }
    },
    components: {FrameforkInfo}
  }
</script>
