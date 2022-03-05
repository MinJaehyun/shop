import axios from 'axios';

// 상세 페이지에 공통적으로 사용되는 URL 설정 
const instance = axios.create({
  baseURL: process.env.baseURL,
})

// 전체 상품 조회
function fetchProducts() {
  return instance.get(`/products`)
}

// 개별 상품 조회
function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

// 검색을 위한 키워드 조회
function fetchProductsByKeyword(keyword) {
  return instance.get(`/products?name_like=${keyword}`)
}

// 검색을 위한 키워드 조회를 params 로 표현
/*
function fetchProductsByKeyword(keyword) {
  return instance.get(`/products/`, {
    params: {
      name_like: keyword,
    },
  })
}
*/

// 장바구니에 상품 추가
function createCartItem(cartItem) {
  return instance.post('/carts', cartItem)
}

// 장바구니 목록 조회
function fetchCartItems() {
  return instance.get('/carts')
}

export { fetchProductById, fetchProductsByKeyword, createCartItem, fetchCartItems, fetchProducts }
