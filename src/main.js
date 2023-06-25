import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import componentFun from "./components/index"

const app = createApp(App)

// 全局注册组件
componentFun(app)

app.use(router)

app.mount("#app")
