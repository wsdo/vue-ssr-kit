import api from 'src/api'

const state = {
  themes: []
}

const getters = {
  getThemes: state => state.themes
}

const mutations = {
  THEMES_LIST: (state, themes) => {
    // console.log(themes);
    state.themes = themes
  }
}

const actions = {
  getThemes ({ state, commit }) {
    // return api.get('/themes').then((response) => {
    //   commit('THEMES_LIST', response.others)
    // }).catch((error) => {
    //   console.log(error)
    // })console.log(111);

    return api.get('/article/list').then((response) => {
      // console.log(response);
      // if (response.statusText === 'OK') {
        commit('THEMES_LIST', response.article)
      // }
    }).catch((error) => {
      console.log(error)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
