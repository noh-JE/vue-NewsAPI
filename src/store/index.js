// Vuex 상태 관리 도구를 사용하여 컴포넌트 데이터 호출하기
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/modules/mutations';
import actions from '@/store/modules/actions';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {}
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
    },
    fetchedItem(state) {
      return state.item
    }
  },
  mutations,
  actions
})