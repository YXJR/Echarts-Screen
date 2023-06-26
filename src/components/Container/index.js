import Container from "./index.vue"

export default function (Vue) {
  Vue.component(Container.name, Container)
}

/**
 * 实现功能：
 *  锁定宽高比
 *  MutationObserver的使用
 */
