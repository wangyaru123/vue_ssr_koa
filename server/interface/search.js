import Router from 'koa-router'
import axios from './utils/axios'
import Poi from '../dbs/models/poi'
let router = new Router({
  prefix: '/search'
})
const sign = 'd8402a2d5ad7e02e80108270d71831cc'

router.get('/top', async ctx => {
  let {
    status,
    data: { top }
  } = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  })
  ctx.body = {
    top: status === 200 ? top : []
  }
})

router.get('/hotPlace', async ctx => {
  let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
  let {
    status,
    data: { result }
  } = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
    params: {
      sign,
      city
    }
  })
  ctx.body = {
    result: status === 200 ? result : []
  }
})
export default router
