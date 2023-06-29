import Container from "./Container/index"
import Loading from "./Loading/index.js"
import VueEcharts from "./VueEcharts/index"

import Logo from "./Logo/index.js"
import CountTo from "./VueCountTo/index.js"
import Icon from "./Icon/index"
import AutoScrollTable from "./AutoScrollTable/index"

export default function (Vue) {
  Vue.use(Container)
  Vue.use(Loading)
  Vue.use(VueEcharts)
  Vue.use(Logo)
  Vue.use(CountTo)
  Vue.use(Icon)
  Vue.use(AutoScrollTable)
}
