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
  actions: {
    FETCH_NEWS() {
      fetchNewsAPI()
        .then(response => {
          this.state.news = response.data
        })
        .catch(error => {
          console.log (error)
        })
    },
    FETCH_JOBS() {
      fetchJobsAPI()
        .then(response => {
          this.state.jobs = response.data
        })
        .catch(error => {
          console.log (error)
        })
    },
    FETCH_ASK() {
      fetchAskAPI()
        .then(response => {
          this.state.ask = response.data
        })
        .catch(error => {
          console.log (error)
        })
    }
  }
})