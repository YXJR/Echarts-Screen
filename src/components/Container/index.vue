<template>
  <div
    id="container"
    :ref="refName"
    :style="style"
  >
    <template v-if="ready">
      <slot></slot>
    </template>

  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from "vue"
import { debounce } from '../../util/index'
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
    let observer;
    const ready = ref(false)
    //dom的宽高
    let width = ref(0)
    let height = ref(0)

    // 视口的宽高
    let originalWidth = ref(0)
    let originalHeight = ref(0)

    const style = ref({})
    const changeStyle = () => {
      style.value = {
        ...style.value,
        color: 'blue'
      }
    }


    const initSize = () => {
      //将回调方法转化为一个同步方法
      return new Promise((resolve) => {
        nextTick(() => { //保证渲染更新之后，否则在同步一些渲染操作的时候可能会出现一些问题
          // 获取的是大屏的真实尺寸
          if (context.options && context.options.width && context.options.height) {
            width.value = context.options.width
            height.value = context.options.height
          }

          // 获取的是画布的尺寸
          if (!originalWidth.value || !originalHeight.value) {
            originalWidth.value = window.screen.width
            originalHeight.value = window.screen.height
          }
          resolve()
        })
      })
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
      // 获取大屏最终的尺寸
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight

      // 获取真实的视口尺寸
      const realWidth = width.value || originalWidth.value
      const realHeight = height.value || originalHeight.value

      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight

      dom.style.transform = `scale(${widthScale},${heightScale})`
    }

    const onResize = async (e) => {
      // MutationObserver将属性传入了 console.log('onResize', e) 
      await initSize()
      updateScale()
    }

    const initMutationObserver = () => {
      const MutationObserver = window.MutationObserver //这里可以做一个兼容;主要是在指定DOM发生变化的时候被调用
      observer = new MutationObserver(onResize) // 在属性变更的时候进行onResize操作
      observer.observe(dom, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true
      })
    }
    const removeMutationObserver = () => {
      if (observer) {
        observer.disconnect()
        observer.takeRecords()
        observer = null
      }
    }
    onMounted(async () => {
      ready.value = false
      context = getCurrentInstance().ctx
      dom = context.$refs[refName]
      await initSize()
      updateSize()
      updateScale()
      window.addEventListener('resize', debounce(100, onResize))
      //console.log(require("vue")) 可以打印出vue的一些方法

      initMutationObserver()
      ready.value = true
    })


    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
      removeMutationObserver()
    })

    return {
      refName,
      width,
      height,
      ready,
      style,
      changeStyle
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