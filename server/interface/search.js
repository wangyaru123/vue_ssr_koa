import Router from 'koa-router'
import axios from './utils/axios'
let router = new Router({
  prefix: '/search'
})
const sign = 'd8402a2d5ad7e02e80108270d71831cc'

router.get('/top', async ctx => {})

export default router
