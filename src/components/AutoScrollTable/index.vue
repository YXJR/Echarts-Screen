<template>
  <el-table
    id="table"
    ref="table"
    :data="tableData"
    :height="height"
    header-row-class-name="setRowClass"
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
</template>
  
<script >
// TODO: 斑马条纹不生效
import { ref, onMounted, computed, getCurrentInstance } from "vue"
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
    //表头高度和各行得高度
    const columnHeightNum = ref("0")
    const headerHeightNum = ref('60')
    const headerHeight = computed(() => `${headerHeightNum.value}px`)
    let columnHeight;
    let task;

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

    const setAnimation = () => {
      //数据的条数
      let dataLen = tableData.value && tableData.value.length;
      // table得总体高度
      let instance = getCurrentInstance()
      let tableDomHeight = instance.refs['table'].height
      // 根据传入得需要展示得条数计算每行得高度
      columnHeightNum.value = (tableDomHeight - headerHeightNum.value) / ctx.disRowNumber
      columnHeight = computed(() => `${columnHeightNum.value}px`)
      // 实际数据条数 * 每行高度
      let columnSumHeight = dataLen * columnHeightNum.value
      // 实际数据条数展示得总高度  没有超出  表格得高度   
      if (columnSumHeight <= tableDomHeight - headerHeightNum.value) {
        return
      }
      let currentIndex = 0
      let tem = [...tableData.value];
      task = setInterval(() => {
        // 只在原数组得基础上进行操作
        let newArr = tableData.value.splice(0, ctx.moveNum) // 防止数组塌陷得问题
        tableData.value = [...tableData.value, ...tem]
        currentIndex += ctx.moveNum

      }, 1000);
    }
    onMounted(() => {



      setAnimation()
    })
    return {
      tableData,
      columnHeight,
      headerHeight
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

:deep(.el-table__row) {
  height: v-bind(columnHeight);
}
:deep(.el-table__row:nth-child(odd)) {
  background-color: rgba(44, 42, 42, 0.4);
}

:deep(.setRowClass) {
  height: v-bind(headerHeight);
}
</style>
<!-- 更改单元格得属性 -->
<!-- :deep(.el-table__cell) {} -->