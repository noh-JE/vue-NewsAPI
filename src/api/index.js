// API 호출 관련 함수 총집합
import axios from 'axios'

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

const fetchNewsAPI = () => {
  return axios.get(`${config.baseUrl}news/1.json`)

  // actions.js 에서는 try, catch 문 사용 안해도 됨
  // async function fetchNewsAPI() {}
  // try {
  //   const response = axios.get(`${config.baseUrl}news/1.json`);
  //   return response;
  // } catch (error) {
  //   console.log (error)
  // }
}
const fetchJobsAPI = () => {
  return axios.get(`${config.baseUrl}jobs/1.json`)
}
const fetchAskAPI = () => {
  return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

const fetchUserAPI = (name) => {
  return axios.get(`${config.baseUrl}user/${name}.json`)
}
const fetchItemAPI = (itemID) => {
  return axios.get(`${config.baseUrl}item/${itemID}.json`)
}


export {
  fetchNewsAPI,
  fetchJobsAPI,
  fetchAskAPI,
  fetchUserAPI,
  fetchItemAPI,
  fetchList
}