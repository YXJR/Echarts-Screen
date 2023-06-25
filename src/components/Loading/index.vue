<template>
  <div class="loading">
    <svg
      :width="width"
      :height="height"
    >
      <circle
        :cx="width/2"
        :cy="height/2"
        :r="cr"
        fill="transparent"
        stroke-width="3"
        :stroke-dasharray="dashArrayOut"
        :stroke="outlineColor"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          :values="transOutTrans"
          :dur="durIn+'s'"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          :values="transOutColor"
          :dur="durColor+'s'"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        :cx="width/2"
        :cy="height/2"
        :r="crIn"
        fill="transparent"
        stroke-width="3"
        :stroke-dasharray="dashArrayIn"
        :stroke="inlineColor"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          :values="transInTrans"
          :dur="durIn+'s'"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          :values="transInColor"
          :dur="durColor+'s'"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <div class="loading-tip">
      <slot />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue"
export default {
  name: 'Loading',
  props: {
    width: {
      type: [Number, String],
      default: '50'
    },
    height: {
      type: [Number, String],
      default: '50'
    },
    cr: {
      type: Number,
      default: 20
    },
    crIn: {
      type: Number,
      default: 10
    },
    inlineColor: {
      type: String,
      default: '#3be6cb'
    },
    outlineColor: {
      type: String,
      default: '#02bcfe'
    },
    durColor: {
      type: Number,
      default: 3
    },
    durIn: {
      type: Number,
      default: 1.5
    }
  },
  setup (ctx) {
    const { outlineColor, inlineColor, cr, crIn, width, height } = ctx
    let transOutColor = ''
    let transInColor = ''
    let transOutTrans = computed(() => `0,${width / 2} ${height / 2};360,${width / 2} ${height / 2}`)
    let transInTrans = computed(() => `360,${width / 2} ${height / 2};0,${width / 2} ${height / 2}`)

    let dashArrayIn = computed(() => (2 * Math.PI * crIn / 4).toFixed(2))
    let dashArrayOut = computed(() => (2 * Math.PI * cr / 4).toFixed(2))

    onMounted(() => {
      transOutColor = computed(() => `${outlineColor}${inlineColor}${outlineColor}`)
      transInColor = computed(() => `${inlineColor}${outlineColor}${inlineColor}`)
    })

    return {
      transOutColor,
      transInColor,
      transOutTrans,
      transInTrans,
      dashArrayOut,
      dashArrayIn
    }

  }
  /**
   *  transOutColor，transInColor 如果不放入onMounted中，颜色会不生效
   *  transOutTrans,transInTrans 如果放入onMounted中，会不生效
  */
}
</script>

<style lang="scss">
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .loading-tip {
    font-size: 15px;
  }
}
</style>
