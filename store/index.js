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
}