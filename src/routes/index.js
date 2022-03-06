import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '@/views/NewsView'
import JobsView from '@/views/JobsView'
import AskView from '@/views/AskView'
import UserView from '@/views/UserView'
import ItemView from '@/views/ItemView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView
  },
  {
    path: '/user/:id',
    component: UserView
  },
  {
    path: '/item/:id',
    component: ItemView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;