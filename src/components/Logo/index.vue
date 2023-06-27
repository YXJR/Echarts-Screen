<template>
  <svg
    t="1687847472116"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="5297"
    width="150"
    height="150"
  >
    <path
      class="path"
      d="M226.133333 616.96l-103.68-103.68c-32.426667-32.426667-45.226667-66.986667-35.84-96.853333 9.813333-29.866667 40.106667-50.346667 85.333334-58.026667l133.12-22.186667c19.2-3.413333 42.666667-20.48 51.626666-37.973333l73.386667-147.2C451.413333 108.8 480.426667 85.333333 512 85.333333s60.586667 23.466667 81.92 65.706667l73.386667 147.2c5.546667 11.093333 17.066667 21.76 29.44 29.013333L237.226667 786.773333c-5.973333 5.973333-16.213333 0.426667-14.506667-8.106666L244.906667 682.666667c4.693333-20.906667-3.84-50.773333-18.773334-65.706667zM779.093333 682.752l29.44 128.426667c12.373333 53.333333 4.693333 93.44-21.76 112.64a64 64 0 0 1-38.4 11.52c-21.76 0-47.36-8.106667-75.52-24.746667l-125.013333-74.24c-19.626667-11.52-52.053333-11.52-71.68 0l-125.013333 74.24c-47.36 27.733333-87.893333 32.426667-113.92 13.226667-9.813333-7.253333-17.066667-17.066667-21.76-29.866667l518.826666-518.826667c19.626667-19.626667 47.36-28.586667 74.24-23.893333l43.093334 7.253333c45.226667 7.68 75.52 28.16 85.333333 58.026667 9.386667 29.866667-3.413333 64.426667-35.84 96.853333l-103.253333 103.68c-15.36 15.36-23.893333 44.8-18.773334 65.706667z"
      p-id="5298"
    ></path>
  </svg>
</template>

<script>
import { onMounted, ref } from "vue"
export default {
  name: 'Logo',
  setup () {
    let len = ref(0)
    onMounted(() => {
      const path = document.getElementsByClassName("path")[0]
      len.value = path.getTotalLength()
      console.log(len.value)
    })
    return {
      len
    }
  }
}
</script>

<style lang="scss" scoped>
.path {
  stroke: rgb(197, 251, 121);
  stroke-width: 25;
  fill: none;
  animation: identifier 5s infinite;
}
@keyframes identifier {
  0% {
    stroke-dasharray: v-bind(len);
    stroke-dashoffset: v-bind(len);
  }
  50% {
    stroke-dasharray: v-bind(len);
    stroke-dashoffset: v-bind(len) / 2;
  }
  70% {
    stroke-dasharray: v-bind(len);
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: v-bind(len);
    stroke-dashoffset: 0;
  }
}
</style>