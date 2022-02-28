<template lang="">
  <div>
    <div v-for="product in products" :key="product.id">
      <img :src="product.imageUrl" :alt="product.name" />
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    const products = response.data.map((item) => {
      return {
        ...item,
        //  "imageUrl": "http://placeimg.com/640/480/fashion"
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }
    })
    return { products }
  },
}
</script>
<style lang=""></style>
