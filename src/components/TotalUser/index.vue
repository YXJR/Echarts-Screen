<template>
  <div class="total-user">
    <div class="title">用户总数</div>
    <div class="sub-title">User Total Count</div>
    <div class="total">
      <count-to
        :startVal="startVal"
        :endVal="todayUser"
        :duration="400"
      >
      </count-to>
    </div>
    <div class="percent-text">
      <span class="percent-text-1">
        每日增长率：
        <count-to
          :startVal="startPercent"
          :endVal="growthDay"
          :duration="400"
          :decimals="2"
          suffix="%"
        >
        </count-to>
      </span>
      <span class="percent-text-2">每月增长率：
        <count-to
          :startVal="startPercent2"
          :endVal="growthMonth"
          :duration="400"
          :decimals="2"
          suffix="%"
        >
        </count-to>
      </span>
    </div>
    <div class="percent">
      <div class="percent-inner-wrapper">
        <div
          class="percent-inner"
          :style="{width:`${startPercent}%`}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue"
export default {
  name: 'TotalUser',
  props: {
    todayUser: {
      type: Number,
      default: 0
    },
    growthDay: {
      type: Number,
      default: 0
    },
    growthMonth: {
      type: Number,
      default: 0
    },
  },

  setup (ctx) {
    const startVal = ref(0)
    const startPercent = ref(0)
    const startPercent2 = ref(0)

    watch(() => ctx.todayUser, (newVal, preVal) => {
      startVal.value = preVal
    })
    watch(() => ctx.growthDay, (newVal, preVal) => {
      startPercent.value = preVal
    })
    watch(() => ctx.growthMonth, (newVal, preVal) => {
      startPercent2.value = preVal
    })

    return {
      startVal,
      startPercent,
      startPercent2,
    }
  }
}
</script>

<style lang="scss" scoped>
.total-user {
  width: 100%;
  height: 100%;
  background: rgb(66, 68, 70);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  padding: 10px 40px;
  box-sizing: border-box;

  .title {
    font-size: 32px;
  }

  .sub-title {
    font-size: 16px;
    letter-spacing: 1px;
    margin-top: 10px;
  }
  .total {
    font-family: DIN;
    font-size: 68px;
    font-weight: bolder;
    letter-spacing: 2px;
    padding: 5px 0;
  }

  .percent-text {
    font-size: 28px;
    font-family: DIN;
    letter-spacing: 2px;

    .percent-text-1 {
      color: rgb(197, 251, 121);
    }

    .percent-text-2 {
      color: rgb(99, 169, 0);
      margin-left: 10px;
    }
  }

  .percent {
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid #fff;
    margin-top: 10px;
    .percent-inner-wrapper {
      height: 100%;
      padding: 2px;
      box-sizing: border-box;
      overflow: hidden;
      .percent-inner {
        height: 100%;
        background: rgb(150, 150, 150);
        transition: all 1s linear;
      }
    }
  }
}
</style>
