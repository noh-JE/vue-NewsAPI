import { fetchItemAPI, fetchList, fetchUserAPI } from '@/api';

export default {
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(response => {
        commit('SET_LIST', response.data)
        return response
      })
      .catch(error => {
        console.log (error)
      })
  },
  FETCH_USER({ commit }, name) {
    return fetchUserAPI(name)
      .then( response => {
        commit('SET_USER', response.data)
      })
      .catch(error => {
        console.log (error)
      })
  },
  FETCH_ITEM({ commit }, itemID) {
    return fetchItemAPI(itemID)
      .then(response => {
        commit('SET_ITEM', response.data)
      })
      .catch(error => {
        console.log (error)
      })
  },
}