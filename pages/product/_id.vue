<template lang="">
  <div class="container">
    <div class="main-panel">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    </div>
    <div class="side-panel">
      <p class="name">name: {{ product.name }}</p>
      <p class="price">price: {{ product.price }}</p>
      <button type="button" @click="moveToCart">addToCart</button>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '../../api/index'

export default {
  async asyncData({ params }) {
    const response = await fetchProductById(params.id)
    const product = response.data
    return { product }
  },
  methods: {
    moveToCart() {
      this.$store.commit('addCartItem', this.product)
      this.$router.push('/cart')
    },
  },
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  widows: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
