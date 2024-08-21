import { createRouter, createWebHistory } from 'vue-router'
import md5 from 'crypto-js/md5'

const routes = [
  {
    path: '/:verify',
    name: 'Home',
    component: () => import('../views/homePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

function isValidVerify(verify) {
  let date = new Date()
  let dateFormated =
    date.getFullYear().toString() +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    date.getDate().toString().padStart(2, '0') +
    date.getHours().toString().padStart(2, '0')

  const hash = md5(dateFormated).toString()
  return hash === verify
}

router.beforeEach((to, from, next) => {
  const verify = to.query.verify
  if (isValidVerify(verify)) {
    next()
  } else {
    next(false)
    alert('Access denied: Invalid verification parameter')
  }
})
export default router
