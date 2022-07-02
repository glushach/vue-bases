<template>
  <div class="card">
    <h3>{{title}}</h3>
    <button class="btn" @click="isOpen = !isOpen">Открыть</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore, facere. Amet animi eligendi eos eveniet excepturi, facilis fugit id libero magni omnis provident quae quibusdam reprehenderit saepe, ut, veniam.</p>
  </div>
</template>

<script>
  export default {
    // props: ['title'],
    props: {
      title: {
        type: String,
        required: true
      },
      id: {
        type: Number,
        required: true
      },
      isOpen: {
        type: Boolean,
        required: false,
        default: false,
        validator(value) {
          console.log(value)
          return value === true || value === false
        }
      }
    },
    data() {
      return {
        // isOpen: false
      }
    }
  }
</script>