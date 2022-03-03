import { fetchCartItems } from "~/api"

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  // addCartItem(state, cartItem) {
  //   state.cartItems.push(cartItem)
  // }
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random${Math.random()}`
    }
    state.cartItems.push(newCartItem)
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  }
}

export const actions = {
  // commit 으로 mutations 가져오기 위한 함수
  async FETCH_CART_ITEMS({ commit }) {
    // 비동기 함수인 처리하기 위해 actions 에 설정한 함수
    const { data } = await fetchCartItems()
    commit('setCartItems', data)
  }
}
