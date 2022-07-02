<template>
  <div class="card">
    <h3>{{title}}</h3>
    <app-button @action="open">
      {{isNewsOpen ? 'Закрыть': 'Отрыть'}}
    </app-button>
    <app-button
        color="danger"
        v-if="wasRead"
        @action="$emit('unmark', id)"
    >Отметить непрочитаной
    </app-button>
    <div v-if="isNewsOpen">
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore, facere. Amet animi eligendi eos eveniet excepturi,
        facilis fugit id libero magni omnis provident quae quibusdam reprehenderit saepe, ut, veniam.
      </p>
      <app-button
          v-if="!wasRead"
          class="primary"
          @action="mark"
      >Прочесть новость</app-button>
    </div>
  </div>
</template>
<script>

  import AppButton from './AppButton'
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
    },
    components: {AppButton}
  }
</script>