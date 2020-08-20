import axios from '../utils/request'

const getCaptcha = () => {
  return axios.get('/getCaptcha')
}
const forget = (option) => {
  return axios.post('/forget', { ...option })
}

export {
  getCaptcha,
  forget
}
