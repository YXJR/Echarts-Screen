<template>
  <div class="country-category">
    <div
      class="category"
      v-for="(item, index) in data"
      :key="item"
      @click="click(index)"
      @mouseenter="mouseIn(index)"
      @mouseleave="mouseOut(index)"
    >
      <div
        class="selected"
        v-if="index === selected"
        :style="{background: color[0]}"
      >
        {{item}}
      </div>
      <div
        class="hovered"
        v-else-if="index === hover"
        :style="{background: color[1]}"
      >
        {{item}}
      </div>
      <div v-else>{{item}}</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue"
export default {
  name: 'CountryCategory',
  props: {
    data: {
      type: Array,
      default: () => {
        return ["中国", "美国", "澳大利亚", "法国"]
      }
    },
    color: {
      type: Array,
      default () {
        return ['rgb(140, 160, 173)', 'rgb(80, 80, 80)']
      }
    }
  },
  setup (ctx) {
    let selected = ref(0)
    let hover = ref(null)
    let taskInterval = null

    const click = (index) => {
      hover.value = index
    }
    const mouseIn = (index) => {
      hover.value = index
    }
    const mouseOut = (index) => {
      hover.value = null
    }
    const setAnimate = () => {
      if (selected.value >= ctx.data.length - 1) {
        selected.value = 0
      } else {
        selected.value = selected.value + 1
      }
    }
    onMounted(() => {
      taskInterval = setInterval(setAnimate, 2000);
    })
    onBeforeUnmount(() => {
      taskInterval && clearInterval(taskInterval)
    })
    return {
      hover,
      selected,
      click,
      mouseIn,
      mouseOut,
    }
  }
}
</script>

<style lang="scss" scoped>
.country-category {
  display: flex;
  width: 100%;
  height: 100%;

  .category {
    flex: 1;
    background: rgb(53, 57, 65);
    font-size: 24px;
    color: rgb(144, 160, 174);

    .hovered {
      background: rgb(80, 80, 80);
    }

    .selected {
      background: rgb(140, 160, 173);
      color: #fff;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
