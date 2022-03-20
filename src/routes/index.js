import Vue from 'vue'
import VueRouter from 'vue-router'
import createListView from '@/views/CreateListView.js'
import UserView from '@/views/UserView'
import ItemView from '@/views/ItemView'
import bus from '@/utils/bus';
import { store } from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: createListView('NewsView'),
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      store.dispatch('FETCH_LIST', to.name)
        .then(() => next())
        .catch((error) => {
          console.log ('error', error);
        })
      // console.log (to, from, next)
    }
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: createListView('JobsView'),
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      store.dispatch('FETCH_LIST', to.name)
        .then(() => next())
        .catch((error) => {
          console.log ('error', error);
        })
      // console.log (to, from, next)
    }
  },
  {
    path: '/ask',
    name: 'ask',
    component: createListView('AskView'),
    beforeEnter: (to, from, next) => {
     bus.$emit('start:spinner')
      store.dispatch('FETCH_LIST', to.name)
        .then(() => next())
        .catch((error) => {
          console.log ('error', error);
        })
      // console.log (to, from, next)
    }
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