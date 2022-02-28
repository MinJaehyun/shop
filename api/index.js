import axios from 'axios';

// 상세 페이지에 공통적으로 사용되는 URL 설정 
const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

export { fetchProductById }