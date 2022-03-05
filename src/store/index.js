// Vuex 상태 관리 도구를 사용하여 컴포넌트 데이터 호출하기
import Vue from 'vue'
import Vuex from 'vuex'
import { fetchAskAPI, fetchJobsAPI, fetchNewsAPI } from '@/api';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: []
  },
  getters: {
    fetchedNews(state) {
      return state.news
    },
    fetchedJobs(state) {
      return state.jobs
    },
    fetchedAsk(state) {
      return state.ask
    }
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs
    },
    SET_ASK(state, ask) {
      state.ask = ask
    }
  },
  actions: {
    FETCH_NEWS({ commit }) { //mutation에 접근하기 위해 필수 변수 context
      fetchNewsAPI()
        .then((response) => {
           // commit(response.data)
          // context.commit('SET_NEWS', response.data) //mutation에 데이터 넘기기
          commit('SET_NEWS', response.data) //디스턱처리
        })
        .catch(error => {
          console.log (error)
        })
    },
    FETCH_JOBS({ commit }) {
      fetchJobsAPI()
        .then((response) => {
          commit('SET_JOBS', response.data)
        })
        .catch(error => {
          console.log (error)
        })
    },
    FETCH_ASK({ commit }) {
      fetchAskAPI()
        .then((response) => {
          commit('SET_ASK', response.data)
        })
        .catch(error => {
          console.log (error)
        })
    }
  }
})