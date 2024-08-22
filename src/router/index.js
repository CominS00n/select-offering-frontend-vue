import { createRouter, createWebHistory } from 'vue-router'

import md5 from 'crypto-js/md5'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/:verify',
    //   name: 'Root',
    //   redirect: '/home'
    // },
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

// function isValidVerify() {
//   let date = new Date()
//   let dateFormated =
//     date.getFullYear().toString() +
//     (date.getMonth() + 1).toString().padStart(2, '0') +
//     date.getDate().toString().padStart(2, '0') +
//     date.getHours().toString().padStart(2, '0')

//   const hash = md5(dateFormated).toString()
//   return hash === verify
// }

router.beforeEach((to, from, next) => {
  const verify = to.query.verify
  const date = new Date()
  const dateFormated =
    date.getFullYear().toString() +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    date.getDate().toString().padStart(2, '0') +
    date.getHours().toString().padStart(2, '0')
  const hash = md5(dateFormated).toString()
  console.log('hash', hash)
  console.log('verify', verify)
  if (hash === verify) {
    next()
  } else {
    alert('Invalid verify')
    next(false)
  }
})

export default router
