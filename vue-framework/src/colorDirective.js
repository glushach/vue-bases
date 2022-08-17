export default {
  mounted(el, binging) {
    console.log(el)
    console.log(binging)

    el.style.color = binging.value;
  },

  updated(el, binging) {
    console.log(el)
    console.log(binging)

    el.style.color = binging.value;
  },

  unmounted() {

  }
}
