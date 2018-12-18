import api from 'src/api'

const state = {
  theme: {}
}

const getters = {
  getTheme: state => state.theme
}

const mutations = {
  THEME_DTAILE: (state, theme) => {
    // console.log(111);
    state.theme = theme
  }
}

const actions = {
  getTheme({ state, commit }, id) {

    return api.get('/article/list').then((response) => {
      if (response.statusText === 'OK') {
        commit('THEME_DTAILE', response.data.article)
      }
    }).catch((error) => {
      console.log(error)
    })


    // return api.get(`/theme/${id}`).then((response) => {
    //   commit('THEME_DTAILE', response)
    // }).catch((error) => {
    //   console.log(error)
    // })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
