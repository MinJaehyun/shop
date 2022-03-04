<template lang="">
  <div class="container">
    <h1 class="list-title">cart page</h1>
    <!-- pages 의 내용을 component 기반으로 분리하여 사용 -->
    <CartList></CartList>
    <!--  -->
    <div class="extra-panel">
      <button type="button">구매하기</button>
    </div>
  </div>
</template>
<script>
import CartList from '@/components/CartList.vue'

export default {
  components: {
    CartList,
  },
  // component 로 분리했으므로 같이 이동시킨다
  // async asyncData({ store }) {
  //   await store.dispatch('FETCH_CART_ITEMS')
  // },
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
