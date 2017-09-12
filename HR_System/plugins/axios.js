import axios from 'axios'

// 配置API接口地址
const DevBaseUrl = 'http://127.0.0.1:3301'
const ProdBashUrl = 'https://api.xxx.com'

let config = {
  baseURL: process.env.NODE_ENV !== 'production' ? DevBaseUrl : ProdBashUrl,
  timeout: 1000
}

if (process.env.VUE_ENV === 'server') {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJ1c2VyTmFtZSI6ImFsbm9ydGgiLCJ1c2VySWQiOiIxOTY5MDM4NDkifSwiaWF0IjoxNTA1MjA1ODE4LCJleHAiOjE1MDU4MTA2MTh9.9DK8jSF1oFAUjh9ouTeh_HfBqk-qgJdw5E7tABm9EhU' // 此函数自行实现
  if (token) {
    config.headers = {
      Authorization: 'Bearer ' + token
    }
  }
}

let request = axios.create(config)

// http request 拦截器
request.interceptors.request.use(
  (config) => {
    console.log('1')
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJ1c2VyTmFtZSI6ImFsbm9ydGgiLCJ1c2VySWQiOiIxOTY5MDM4NDkifSwiaWF0IjoxNTA1MjA1ODE4LCJleHAiOjE1MDU4MTA2MTh9.9DK8jSF1oFAUjh9ouTeh_HfBqk-qgJdw5E7tABm9EhU'
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = 'Bearer ' + token
      console.log(config.headers)
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  config => {
    console.log('3')
    return config
  }, (error) => {
    console.log('4')
    return Promise.reject(error)
  }
)

export default request
