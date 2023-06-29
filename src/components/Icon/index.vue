<template>
  <div
    class="icon-wrapper"
    :style="{...style}"
  >
    <svg class="icon">
      <use :href="iconName"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: 'shujufenxi'
    },
    prefix: {
      type: String,
      default: 'icon'
    },
    style: Object

  },
  setup (ctx) {
    // icon - shujufenxi
    const iconName = `#${ctx.prefix}-${ctx.name}`
    return {
      iconName
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 5.5rem;
  height: 5.5rem;
  fill: white;
  stroke: #fff;
}
</style>