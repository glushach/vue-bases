let internal;
let defaultColor;

const mouseover = event => {
  event.target.style.color = 'red';
}

const mouseout = event => {
  event.target.style.color = defaultColor;
}

export default {
  mounted(el, binging) {
    console.log(el)
    console.log(binging)

    defaultColor = binging.value;

    el.style[binging.arg] = binging.value;

    if (binging.modifiers.blink) {
      let flag = true;
      internal = setInterval(() => {
        el.style.color = flag ? '#fff' : binging.value;
        flag = !flag;
      }, 1000);
    }

    if (binging.modifiers.hover) {
      el.addEventListener('mouseover', mouseover);
      el.addEventListener('mouseout', mouseout);
    }
  },

  updated(el, binging) {
    el.style[binging.arg] = binging.value;
  },

  unmounted(el) {
    console.log('unmounted');

    if (internal) {
      clearInterval(internal);
    }

    el.removeEventListener('mouseover', mouseover);
    el.removeEventListener('mouseout', mouseout);
  }
}
