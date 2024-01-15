import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isfollowing: false,
  },
  getters: {
    getCurrentUser(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      window.localStorage.setItem('user', JSON.stringify(data))
    },
    setFollow(state, data) {
      state.isfollowing = data
      window.localStorage.setItem('is_following', JSON.stringify(data))
    }
  },
  actions: {
  },
  modules: {
  }
})
