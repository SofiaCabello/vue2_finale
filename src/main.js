import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/index.less'

Vue.config.productionTip = false

// 创建Vue根实例，把router、store配置到根实例中
// 把App根组件渲染到#app节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
