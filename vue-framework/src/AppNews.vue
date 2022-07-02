<template>
  <div class="card">
    <h3>{{title}}</h3>
    <button class="btn" @click="open">
      {{isNewsOpen ? 'Закрыть': 'Отрыть'}}
    </button>
    <button class="btn danger" v-if="wasRead" @click="$emit('unmark', id)">
      Отметить непрочитаной
    </button>
    <div v-if="isNewsOpen">
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore, facere. Amet animi eligendi eos eveniet excepturi,
        facilis fugit id libero magni omnis provident quae quibusdam reprehenderit saepe, ut, veniam.
      </p>
      <button v-if="!wasRead" class="btn primary" @click="mark">Прочесть новость</button>
    </div>
  </div>
</template>

<script>
  export default {
    // props: ['title'],
    // emits: ['open-news'],
    props: {
      wasRead: Boolean,
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
          return value === true || value === false
        }
      }
    },
    emits: {
      'open-news': null,
      'read-news'(id) {
        if (id) {
          return true
        }
        console.warn('Нет параметра id для emit read-news')
        return false
      },
      unmark: null
    },
    data() {
      return {
        isNewsOpen: this.isOpen
      }
    },
    methods: {
      open() {
        this.isNewsOpen = !this.isNewsOpen
        if (this.isNewsOpen) {
          this.$emit('open-news')
        }
      },
      mark() {
        this.isNewsOpen = false
        this.$emit('read-news', this.id)
      },
      // unmark() {
      //   this.$emit('unmark', this.id)
      // }
    }
  }
</script>