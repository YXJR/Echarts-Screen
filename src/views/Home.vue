<template>
  <div class="home">
    <Loading
      width="200"
      height="200"
      :cr="60"
      :crIn="30"
      v-if="loading"
    >数据大屏加载中...</Loading>
    <Container
      class="container"
      :options="{width:3840,height:2160}"
      v-else
    >
      <div class="header">header</div>
      <div class="separator">222</div>
      <div class="center">
        <div class="left">
          <div class="left1">111</div>
          <div class="left2">111</div>
          <div class="left3">111</div>
          <div class="left4">111</div>
          <div class="left5">111</div>
          <div class="left6">111</div>
        </div>
        <div class="right">
          <div class="right-top1">right-top1</div>
          <div class="right-top2">right-top2</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">111</div>
              <div class="right-left2">222</div>
              <div class="right-left3">333</div>
              <div class="right-left4">333</div>
            </div>
            <div class="right-right">
              <div class="right-right1">444</div>
              <div class="right-right2">555</div>
            </div>
          </div>

        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"
export default {
  name: 'Home',

  setup () {
    let loading = ref(true)
    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 2500)
    })
    return {
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;

  :deep(.loading-tip) {
    font-size: 32px;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .header {
      width: 100%;
      height: 167px;
      background: yellow;
    }
    .separator {
      height: 10px;
      background: #000;
    }
    .center {
      flex: 1;
      display: flex;
      width: 100%;
      background: rebeccapurple;
      .left {
        flex: 0 0 860px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 860px;
        height: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;

        .left1 {
          height: 300px;
          background: green;
        }
        .left2 {
          height: 320px;
          background: yellowgreen;
        }
        .left3 {
          height: 280px;
          background: blueviolet;
        }
        .left4 {
          height: 230px;
          background: mediumpurple;
        }
        .left5 {
          height: 360px;
          background: pink;
        }
        .left6 {
          height: 360px;
          background: darkred;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        &-top1 {
          width: 100%;
          height: 206px;
          background: darkred;
        }
        &-top2 {
          width: 100%;
          height: 48px;
          background: cadetblue;
        }
        &-bottom {
          flex: 1;
          display: flex;

          padding-bottom: 20px;
          .right-left {
            flex: 0 0 1917px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 1917px;
            .right-left1 {
              height: 999px;
              background: red;
            }
            .right-left2 {
              height: 80px;
              background: yellowgreen;
            }
            .right-left3 {
              height: 350px;
              background: deepskyblue;
            }
            .right-left4 {
              height: 220px;
              background: orangered;
            }
          }
          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            .right-right1 {
              width: 100%;
              height: 999px;
              background: burlywood;
            }
            .right-right2 {
              width: 100%;
              height: 650px;
              background: darkred;
            }
          }
        }
      }
    }
  }
}
</style>

<!-- 父级设定flex布局，子项得手动指定宽高 -->