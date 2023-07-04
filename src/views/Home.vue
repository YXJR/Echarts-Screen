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
      <div class="header">
        <top-header />
      </div>
      <div class="separator"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :today-user="todayUser"
              :growth-day="growthLastDay"
              :growth-month="growthLastMonth"
            />
          </div>
          <div class="left2">
            <average-age
              :data="[]"
              :avgAge="36"
            >
            </average-age>
          </div>
          <div class="left3">111</div>
          <div class="left4">111</div>
          <div class="left5">111</div>
          <div class="left6">111</div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header></center-header>
          </div>
          <div class="right-top2">
            <country-category></country-category>
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">111</div>
              <div class="right-left2"> <country-category></country-category></div>
              <div class="right-left3">333</div>
              <div class="right-left4">333</div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                <auto-scroll-table :height="999"></auto-scroll-table>
              </div>
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
import TotalUser from "../components/TotalUser/index.vue"
import AverageAge from "../components/AverageAge/index.vue"
import CenterHeader from "../components/CenterHeader/index.vue"
import CountryCategory from "../components/CountryCategory.vue/index.vue"
import { useTotalUser } from "../hooks/useScreenData"
export default {
  name: 'Home',
  components: {
    TotalUser,
    AverageAge,
    CenterHeader,
    CountryCategory
  },
  setup () {
    let loading = ref(true)
    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 2500)
    })
    return {
      loading,
      ...useTotalUser()
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
      background: #999;
    }
    .center {
      flex: 1;
      display: flex;
      width: 100%;

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
        height: 100%;
        margin: 0 10px;
        max-width: 2960px;

        .right-top1 {
          height: 206px;
          margin-bottom: 20px;
        }

        .right-top2 {
          height: 48px;
          margin-bottom: 20px;
        }

        .right-bottom {
          flex: 1;
          display: flex;

          .right-left {
            display: flex;
            flex-direction: column;
            width: 1917px;

            .right-left1 {
              height: 999px;
            }

            .right-left2 {
              height: 80px;
              padding-top: 20px;
              box-sizing: border-box;
            }

            .right-left3 {
              height: 350px;
              margin-top: 10px;

              .dv-border-box-8 {
                width: 100%;
                height: 100%;
                padding: 5px;
                box-sizing: border-box;
                background: rgb(66, 68, 70);
                border-radius: 10px;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
              }
            }

            .right-left4 {
              height: 220px;
              margin-top: 10px;
            }
          }

          .right-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 10px;

            .right-right1 {
              width: 100%;
              height: 999px;
              padding-right: 10px;
              box-sizing: border-box;
            }

            .right-right2 {
              width: 100%;
              height: 650px;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>

<!-- 父级设定flex布局，子项得手动指定宽高 -->