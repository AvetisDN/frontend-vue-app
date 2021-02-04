import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: localStorage.getItem('va-theme') ? localStorage.getItem('va-theme') : 'light'
  },
  mutations: {
    toggleTheme() {
      this.state.theme = this.state.theme == 'light' ? 'dark' : 'light'
      localStorage.setItem('va-theme', this.state.theme)
    }
  },
  actions: {
    toggleThemeAction({commit}) {
      commit('toggleTheme')
    }
  },
  modules: {
  }
})
