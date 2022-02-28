<template lang="">
  <div>
    {{ $route.params.id }}
    {{ product }}
  </div>
</template>
<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const response = await axios.get(
      `http://localhost:3000/products/${params.id}`
    )
    const product = response.data
    return { product }
  },
}
</script>
<style lang=""></style>
