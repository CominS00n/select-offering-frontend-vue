import { createRouter, createWebHistory } from 'vue-router'

import md5 from 'crypto-js/md5'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:verify',
      query: {
        verify: { type: String, required: true }
      },
      name: 'Home',
      component: () => import('../components/homePage.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const verify = to.query.verify
  const date = new Date()
  const dateFormated =
    date.getFullYear().toString() +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    date.getDate().toString().padStart(2, '0') +
    date.getHours().toString().padStart(2, '0')
  const hash = md5(dateFormated).toString()
  if (hash === verify) {
    console.log('Valid verify')
    next()
  } else {
    alert('Invalid verify')
    next(false)
  }
})

export default router
