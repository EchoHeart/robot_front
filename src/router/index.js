import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../components/main')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../components/homeTest')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/home'),
    redirect: '/02-main',
    children: [
      {path: '/02-main', name: '02-main', component: () => import('../components/02-main')},
      {path: '/04-main', name: '04-main', component: () => import('../components/04-main')},
      {path: '/06-main', name: '06-main', component: () => import('../components/06-main')},
      {path: '/07-main', name: '07-main', component: () => import('../components/07-main')},
      // {path: '/test', name: 'test', component: () => import('../components/test')},
    ]
  },
  {
    path: '/elevator',
    name: 'elevator',
    component: () => import('../components/elevator')
  },
  {
    path: '/02-01jizhengjianyan',
    name: '02-01jizhengjianyan',
    component: () => import('../components/02-01jizhengjianyan')
  },
  {
    path: '/02-03/:radius',
    name: '02-03',
    component: () => import('../components/02-03')
  },
  {
    path: '/04-02/:radius',
    name: '04-02',
    component: () => import('../components/04-02')
  },
  {
    path: '/06-02xinshen/:radius',
    name: '06-02xinshen',
    component: () => import('../components/06-02xinshen')
  },
  {
    path: '/06-03zhongzheng/:radius',
    name: '06-03zhongzheng',
    component: () => import('../components/06-03zhongzheng')
  },
  {
    path: '/06-05puwai/:radius',
    name: '06-05puwai',
    component: () => import('../components/06-05puwai')
  },
  {
    path: '/06-06xiongwaiminiao/:radius',
    name: '06-06xiongwaiminiao',
    component: () => import('../components/06-06xiongwaiminiao')
  },
  {
    path: '/06-07zongheneike/:radius',
    name: '06-07zongheneike',
    component: () => import('../components/06-07zongheneike')
  },
  {
    path: '/07-01/:radius',
    name: '07-01',
    component: () => import('../components/07-01')
  },
  {
    path: '/07-02/:radius',
    name: '07-02',
    component: () => import('../components/07-02')
  },
  {
    path: '/07-03ICU/:radius',
    name: '07-03ICU',
    component: () => import('../components/07-03ICU')
  },
  {
    path: '/07-04/:radius',
    name: '07-04',
    component: () => import('../components/07-04')
  },
  {
    path: '/07-05/:radius',
    name: '07-05',
    component: () => import('../components/07-05')
  },
  {
    path: '/07-06/:radius',
    name: '07-06',
    component: () => import('../components/07-06')
  },
  {
    path: '/07-07/:radius',
    name: '07-07',
    component: () => import('../components/07-07')
  },
  {
    path: '/07-08/:radius',
    name: '07-08',
    component: () => import('../components/07-08')
  },
  {
    path: '/07-09/:radius',
    name: '07-09',
    component: () => import('../components/07-09')
  },
  {
    path: '/07-10/:radius',
    name: '07-10',
    component: () => import('../components/07-10')
  },
  {
    path: '/07-11/:radius',
    name: '07-11',
    component: () => import('../components/07-11')
  },
  {
    path: '/B1/:radius',
    name: 'B1',
    component: () => import('../components/B1')
  },
  {
    path: '/B04-01-menzhen/:radius',
    name: 'B04-01-menzhen',
    component: () => import('../components/B04-01-menzhen')
  },
  {
    path: '/B06-04-shennei/:radius',
    name: 'B06-04-shennei',
    component: () => import('../components/B06-04-shennei')
  }
]

const router = new VueRouter({
  routes
})

export default router
