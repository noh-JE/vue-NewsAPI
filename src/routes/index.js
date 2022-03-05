import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '@/components/views/NewsView'
import JobsView from '@/components/views/JobsView'
import AskView from '@/components/views/AskView'

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/news' },
  { path: '/news', component: NewsView },
  { path: '/jobs', component: JobsView },
  { path: '/ask', component: AskView },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;