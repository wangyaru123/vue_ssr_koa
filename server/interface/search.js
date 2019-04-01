import Router from 'koa-router'
import axios from './utils/axios'
import Poi from '../dbs/models/poi'
let router = new Router({
  prefix: '/search'
})
const sign = 'd8402a2d5ad7e02e80108270d71831cc'

//头部搜索
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

//热门推荐
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

//获取关键词相关的数据
router.get('/resultsByKeywords', async ctx => {
  const { city, keyword } = ctx.query
  let {
    status,
    data: { count, pois }
  } = await axios.get('http:cp-tools.cn/search/result', {
    params: {
      city,
      keyword
    }
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200 ? pois : []
  }
})
export default router
