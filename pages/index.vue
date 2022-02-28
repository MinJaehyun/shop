<template lang="">
  <div class="app">
    <main>
      <Search></Search>
      <ul>
        <li v-for="product in products" :key="product.id" class="item flex">
          <img
            :src="product.imageUrl"
            :alt="product.name"
            class="product-image"
            @click="moveToProduct(product.id)"
          />
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
// import Search from '@/components/Search.vue'

export default {
  components: {
    // Search,
  },
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
  methods: {
    moveToProduct(id) {
      this.$router.push(`product/${id}`)
    },
  },
}
</script>

<style scoped>
.app {
  position: relative;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.flex {
  display: flex;
  justify-content: center;
}
.product-image {
  width: 400px;
  height: 250px;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
