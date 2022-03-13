import Vue from 'vue'
import VueRouter from 'vue-router'
import createListView from '@/views/CreateListView.js'
import UserView from '@/views/UserView'
import ItemView from '@/views/ItemView'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: createListView('NewsView')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: createListView('JobsView')
  },
  {
    path: '/ask',
    name: 'ask',
    component: createListView('AskView')
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