<template>
  <div
    id="container"
    :ref="refName"
  >
    <slot></slot>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted, onUnmounted } from "vue"
export default {
  name: 'Container',
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup (ctx) {
    const refName = "Container"
    let context = ''
    let dom = ''
    //dom的宽高
    let width = ref(0)
    let height = ref(0)

    // 视口的宽高
    let originalWidth = ref(0)
    let originalHeight = ref(0)


    const initSize = () => {
      dom = context.$refs[refName]

      // 获取的是大屏的真实尺寸
      if (context.options && context.options.width && context.options.height) {
        width.value = context.options.width
        height.value = context.options.height
      } else {
        width.value = dom.clientWidth
        height.value = dom.clientHeight
      }

      // 获取的是画布的尺寸
      if (!originalWidth.value || !originalHeight.value) {
        originalWidth.value = window.screen.width
        originalHeight.value = window.screen.height
      }
    }

    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`
        dom.style.height = `${height.value}px`
      } else {
        dom.style.width = `${originalWidth.value}px`
        dom.style.height = `${originalHeight.value}px`
      }
    }

    const updateScale = () => {
      // 获取真实的视口尺寸
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight

      // 获取大屏最终的尺寸
      const realWidth = width.value || originalWidth.value
      const realHeight = height.value || originalHeight.value

      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight
      dom.style.transform = `scale(${widthScale},${heightScale})`
    }
    const onResize = () => {
      initSize()
      updateScale()
    }
    onMounted(() => {
      context = getCurrentInstance().ctx
      initSize()
      updateSize()
      updateScale()

      window.addEventListener('resize', onResize)
      //console.log(require("vue")) 可以打印出vue的一些方法
    })

    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
    })

    return {
      refName,
      width,
      height
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
</style>