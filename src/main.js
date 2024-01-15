import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'

import 'amfe-flexible'

import './styles/index.less'

Vue.use(Vant)
Vue.use(Vuex)

Vue.config.productionTip = false

const userData = window.localStorage.getItem('user')
if(userData) {
  store.commit('setUser', JSON.parse(userData))
}

// 创建Vue根实例，把router、store配置到根实例中
// 把App根组件渲染到#app节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
