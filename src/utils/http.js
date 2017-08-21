// 若需要更多的请求参数请查看axios文档
import axios from 'axios'

// get
export const getMethod = ({ url, params, headers }) => {
  const method = 'get'
  return axios({ method, url, params, headers })
}

// post
export const postMethod = ({ url, data, headers }) => {
  const method = 'post'
  return axios({ method, url, data, headers })
}

// put
export const putMethod = ({ url, data, headers }) => {
  const method = 'put'
  return axios({ method, url, data, headers })
}
