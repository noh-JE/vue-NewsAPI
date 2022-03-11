import { fetchAskAPI, fetchItemAPI, fetchJobsAPI, fetchNewsAPI, fetchUserAPI } from '@/api';

export default {
  FETCH_NEWS({ commit }) { //mutation에 접근하기 위해 필수 변수 context
    fetchNewsAPI()
      .then((response) => {
        // commit(response.data)
        // context.commit('SET_NEWS', response.data) //mutation에 데이터 넘기기
        commit('SET_NEWS', response.data) //디스턱처리
        return response
      })
      .catch(error => {
        console.log (error)
      })
  },
  FETCH_JOBS({ commit }) {
    fetchJobsAPI()
      .then((response) => {
        commit('SET_JOBS', response.data)
        return response
      })
      .catch(error => {
        console.log (error)
      })
  },
  FETCH_ASK({ commit }) {
    fetchAskAPI()
      .then((response) => {
        commit('SET_ASK', response.data)
        return response
      })
      .catch(error => {
        console.log (error)
      })
  },
  FETCH_USER({ commit }, name) {
    fetchUserAPI(name)
      .then( response => {
        commit('SET_USER', response.data)
      })
      .catch(error => {
        console.log (error)
      })
  },
  FETCH_ITEM({ commit }, itemID) {
    fetchItemAPI(itemID)
      .then(response => {
        commit('SET_ITEM', response.data)
      })
      .catch(error => {
        console.log (error)
      })
  }
}