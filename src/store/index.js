import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowState: '',
    today: null,
    clicked: []
  },
  mutations: {
	toActive({ nowState }) {
      nowState = 'active'
    },
    toRest({ nowState }) {
      nowState = 'rest'
    },
    changeToday({ today }) {
      today = new Date()
    },
	addClicked({ clicked }) {
		clicked.push(Date.now())
	}
  },
  getters: {
    clicked({ clicked }) {
      return clicked
    }
  }
})
