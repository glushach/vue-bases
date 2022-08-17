<template>
  <div class="container">
    <div class="card">
      <h2 v-color:[type]="myColor">Talk about directives</h2>
      
      <div class="form-control">
        <label for="inp">Active by default</label>
        <input v-focus type="text" id="inp">
      </div>
      
      <button class="btn" @click="myColor = 'darkblue'">It is doing blue</button>
      <button class="btn"
              @click="type = type === 'color' ? 'backgroundColor' : 'color'">
        Toggle of type</button>
    </div>
  </div>
</template>


<script>

import focusDirective from "./focusDirective";
import colorDirective from "./colorDirective";

export default {
  data() {
    return {
      myColor: 'darkred',
      type: 'color'
    }
  },
  directives: {
    focus: focusDirective,
    color: colorDirective
  }
}
</script>

<style scoped>

</style>
