<template>
  <div>
    <p>메인</p>
    <!-- <p>첫 번째 products: {{ products[0] }}</p> -->
    <!-- <P>{{ products }}</P> -->
    <ProductList></ProductList>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'

export default {
  components: { ProductList },
}
</script>

<style></style>
