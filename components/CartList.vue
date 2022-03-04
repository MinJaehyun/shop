<template lang="">
  <!-- html -->
  <div class="list-wrapper">
    <ul>
      <li
        v-for="item in $store.state.cartItems"
        :key="item.id"
        class="list-item"
      >
        <img :src="item.imageUrl" :alt="item.name" class="thumbnail" />
        <div class="description">
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// import { FETCH_CART_ITEMS } from '@/store'

export default {
  // component 에서는 asyncData() 사용 불가능
  // async asyncData({ store }) {
  //   await store.dispatch('FETCH_CART_ITEMS')
  // },
  // fetch() 사용하여 비동기를 동기적으로 처리한다
  async fetch() {
    await this.$store.dispatch('FETCH_CART_ITEMS')
  },
}

/** asyncData, fetch 차이
 * 1. asyncData:
 * - 페이지 로딩 전, 데이터 가져온다.
 * - 즉, beforeCreate() 이 전에 처리된다.
 * - 고로, this 사용 불가능.
 * - NOTE: 데이터를 반환하여 병합하는데 목적이 있다!
 *
 * 2. fetch:
 * - 페이지 로딩 후, 처리된다.
 * - 즉, created() 이 후, mounted() 이 전에 처리된다.
 * - 고로, this 로 접근 가능.
 * - NOTE: 비동기 로직을 호출하는데 목적이 있다!
 *
 */
</script>

<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
</style>
