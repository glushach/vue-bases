export default {
  mounted(el, binging) {
    console.log(el)
    console.log(binging)

    el.style[binging.arg] = binging.value;
  },

  updated(el, binging) {
    el.style[binging.arg] = binging.value;
  },

  unmounted() {

  }
}
