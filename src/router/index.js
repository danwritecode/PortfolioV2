import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import blog from '@/components/Blog'
import missionstatement from '@/components/MissionStatement'
import contact from '@/components/Contact'
import writeblog from '@/components/WriteBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/missionstatement',
      name: 'missionstatement',
      component: missionstatement
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/writeblog',
      name: 'writeblog',
      component: writeblog
    }
    
  ]
})
