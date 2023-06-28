import { ref, onMounted, onUnmounted } from "vue"

export function useTotalUser() {
  const todayUser = ref(1000)
  const growthLastDay = ref(0)
  const growthLastMonth = ref(0)

  let task
  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + 50
      growthLastDay.value = growthLastDay.value + 0.65
      growthLastMonth.value = growthLastMonth.value + 1.65
    }, 3000)
  })

  onUnmounted(() => {
    task && clearInterval(task)
  })
  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
  }
}
