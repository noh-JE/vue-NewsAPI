import { fetchItemAPI, fetchList, fetchUserAPI } from '@/api';

export default {
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(response => {
  //       commit('SET_LIST', response.data)
  //       return response
  //     })
  //     .catch(error => {
  //       console.log (error)
  //     })
  // },
  // async FETCH_JOBS({ commit }) {
  //   try {
  //     const { data } = await fetchList();
  //     commit('SET_LIST', data)
  //     return data;
  //   } catch(error) {
  //     console.log (error)
  //   }
  // },
  async FETCH_LIST(context, pageName) {
    try {
      const response = await fetchList(pageName);
      context.commit('SET_LIST', response.data)
      return response;
    } catch(error) {
      console.log (error)
    }
  },
  // FETCH_ITEM({ commit }, itemID) {
  //   return fetchItemAPI(itemID)
  //     .then(response => {
  //       commit('SET_ITEM', response.data)
  //     })
  //     .catch(error => {
  //       console.log (error)
  //     })
  // },

  async FETCH_ITEM(context, itemID) {
    try {
      const response = await fetchItemAPI(itemID);
      context.commit('SET_ITEM', response.data);
      return response;
    } catch(error) {
      console.log (error)
    }
  },
  // FETCH_USER({ commit }, name) {
  //   return fetchUserAPI(name)
  //     .then( response => {
  //       commit('SET_USER', response.data)
  //     })
  //     .catch(error => {
  //       console.log (error)
  //     })
  // },

  async FETCH_USER(context, name) {
    try {
      const response = await fetchUserAPI(name);
      context.commit('SET_USER', response.data);
      return response;
    } catch(error) {
      console.log (error)
    }
  }
}