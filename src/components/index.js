import Container from "./Container/index"
import Loading from "./Loading/index.js"
import VueEcharts from "./VueEcharts/index"

export default function (Vue) {
  Vue.use(Container)
  Vue.use(Loading)
  Vue.use(VueEcharts)
}
