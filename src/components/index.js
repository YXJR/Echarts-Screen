import Container from "./Container/index"
import Loading from "./Loading/index.js"
import VueEcharts from "./VueEcharts/index"
import TopHeader from "./TopHeader/index.js"
import Logo from "./Logo/index.js"

export default function (Vue) {
  Vue.use(Container)
  Vue.use(Loading)
  Vue.use(VueEcharts)
  Vue.use(TopHeader)
  Vue.use(Logo)
}
