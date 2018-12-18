import api from '../../api'

const state = {
  articleDesc: {}
}

const getters = {
  getArticleDesc: state => state.articleDesc
}

const mutations = {
  ARTICLE_DESC: (state, theme) => {
    // console.log(111);
    state.articleDesc = theme
  }
}

const actions = {
  getArticleDesc({ state, commit }, id) {
    return api.get(`/article/desc?id=${id}`).then((response) => {
      // if (response.statusText === 'OK') {
      commit('ARTICLE_DESC', response)
      // }
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
