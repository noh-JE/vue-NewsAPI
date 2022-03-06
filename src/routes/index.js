import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '@/components/views/NewsView'
import JobsView from '@/components/views/JobsView'
import AskView from '@/components/views/AskView'
import UserView from '@/components/views/UserView'
import ItemView from '@/components/views/ItemView';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/news' },
  { path: '/news', component: NewsView },
  { path: '/jobs', component: JobsView },
  { path: '/ask', component: AskView },
  { path: '/user/:id', component: UserView },
  { path: '/item/:id', component: ItemView },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;