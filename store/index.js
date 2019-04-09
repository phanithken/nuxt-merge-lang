import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        lang: 'en'
    },
    mutations: {
        CHANGE_LANG (state, lang) {
            state.lang = lang
        }
    },
    actions: {
        changeLanguage ({ commit }, lang) {
            commit('CHANGE_LANG', lang)
        }
    }
})

export default store