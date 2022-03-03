import axios from 'axios';

// 상세 페이지에 공통적으로 사용되는 URL 설정 
const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProductsByKeyword(keyword) {
  return instance.get(`/products?name_like=${keyword}`)
}

// 위를 params 로 표현하는 방법
// function fetchProductsByKeyword(keyword) {
//   return instance.get(`/products/`, {
//     params: {
//       name_like: keyword,
//     },
//   })
// }

// 장바구니에 상품 추가
function createCartItem(cartItem) {
  return instance.post('/carts', cartItem)
}

// 장바구니 목록 조회
function fetchCartItems() {
  return instance.get('/carts')
}

export { fetchProductById, fetchProductsByKeyword, createCartItem, fetchCartItems }
