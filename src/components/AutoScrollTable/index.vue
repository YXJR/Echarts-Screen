<template>
  <Transition mode="out-in">
    <el-table
      id="table"
      :ref="refName"
      :data="tableData"
      :height="height"
      header-row-class-name="setHeaderRowClass"
      :stripe="true"
      style="text-align:center"
    >
      <el-table-column
        label="Date"
        header-align="center"
        width="120"
      >
        <template #default>
          <icon
            name="iconfont_dot"
            :style="{width:'50px',height:'50px'}"
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="Date"
      />
      <el-table-column
        prop="name"
        label="Name"
        width="240"
      />
      <el-table-column
        prop="address"
        label="Address"
      />
    </el-table>
  </Transition>

</template>
  
<script >
// TODO: 斑马条纹不生效
import { ref, onMounted, computed, watch, onBeforeUnmount, } from "vue"
export default {
  name: 'AutoScrollTable',
  props: {
    // 传入整体得高度和表头得高度
    height: {
      type: String,
      default: 999
    },
    duration: {
      type: String,
      default: 1000
    },
    moveNum: {
      type: Number,
      default: 1
    },
    // 表格中要展示得条数
    disRowNumber: {
      type: Number,
      default: 7
    }

  },
  setup (ctx) {
    const refName = ref("table")

    let currentIndex = ref(1)
    //表头高度和各行得高度
    const columnHeightNum = ref("0")
    const headerHeightNum = ref('90')
    const headerHeight = computed(() => `${headerHeightNum.value}px`)
    let isClearAnimate = ref(true)
    let columnHeight;
    columnHeightNum.value = (ctx.height - headerHeightNum.value) / ctx.disRowNumber
    columnHeight = computed(() => `${columnHeightNum.value}px`)
    let task;
    let wrapperBody = null;

    const tableData = ref([
      {
        date: '11',
        name: 'Tom',
        address: 'No. 189',
      },
      {
        date: '22',
        name: 'Tom',
        address: 'No. 189',
      },
      {
        date: '33',
        name: 'Tom',
        address: 'No. 189',
      },
      {
        date: '44',
        name: 'Tom',
        address: 'No. 189',
      },
      {
        date: '55',
        name: 'Tom',
        address: 'No. 189',
      },
      {
        date: '66',
        name: 'Tom',
        address: 'No. 189',
      },
      {
        date: '77',
        name: 'Tom',
        address: 'No. 189',
      },
      {
        date: '88',
        name: 'Tom',
        address: 'No. 189',
      },
    ])
    let tem = [...tableData.value]
    let dataLen = tableData.value && tableData.value.length;

    const setAnimation = () => {
      let num = currentIndex.value * columnHeightNum.value
      wrapperBody.style.transition = 'margin-top 1s'
      wrapperBody.style.marginTop = `-${num}px`

      if (dataLen - currentIndex.value == ctx.disRowNumber) {
        tableData.value = [...tableData.value, ...tem]
      }


      if (dataLen < currentIndex.value) {
        isClearAnimate.value = false
      } else {
        currentIndex.value = currentIndex.value + 1
      }

    }

    const clearAnimation = () => {
      task && clearInterval(task)
      tableData.value.splice(0, currentIndex.value - 1)
      currentIndex.value = 1
      wrapperBody.style.transition = ''
      wrapperBody.style.marginTop = `0`
      isClearAnimate.value = true
    }

    // 开启动画
    const switchAnimation = () => {
      if (ctx.disRowNumber >= dataLen) {
        return
      }
      wrapperBody = document.getElementsByClassName("el-table__body")[0]
      task = setInterval(setAnimation, 2000)
    }

    watch(() => isClearAnimate.value, (newVal) => {
      newVal ? switchAnimation() : clearAnimation()
    })

    onMounted(() => {
      switchAnimation()
    })

    onBeforeUnmount(() => {
      task && clearInterval(task)
    })

    return {
      tableData,
      columnHeight,
      headerHeight,
      refName,
    }
  }
}

  </script>

<style lang="scss" scoped>
#table {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

:deep(.el-table__inner-wrapper) {
  .el-table__body {
  }
  .el-table__header-wrapper {
    background: black;
    position: relative !important;
    z-index: 10000000;
  }
  .setHeaderRowClass {
    height: v-bind(headerHeight);
  }
  .el-table__row {
    height: v-bind(columnHeight);
    //background: red;
  }
  .el-table__row:nth-child(odd) {
    background-color: rgba(85, 4, 4, 0.4);
  }
}
</style>
<!-- 更改单元格得属性 -->
<!-- :deep(.el-table__cell) {} -->