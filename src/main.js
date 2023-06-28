import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import componentFun from "./components/index"
import TopHeader from "./components/TopHeader/index.vue"
const app = createApp(App)

// 全局注册组件
componentFun(app)

app.component(TopHeader.name, TopHeader).use(router).mount("#app")
