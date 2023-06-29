import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import componentFun from "./components/index"
import TopHeader from "./components/TopHeader/index.vue"
import ElementPlus from "element-plus"
const app = createApp(App)

// 全局注册组件
componentFun(app)

app
  .component(TopHeader.name, TopHeader)
  .use(ElementPlus, { size: "small", zIndex: 3000 })
  .use(router)
  .mount("#app")
