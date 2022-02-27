<template lang="">
  <div>
    <header>
      <h1>{{ $route.name }}페이지</h1>
      <NuxtLink to="/">home page</NuxtLink>
      <NuxtLink to="/main">main page</NuxtLink>
      <NuxtLink to="/product">product page</NuxtLink>
    </header>
    <Nuxt />
  </div>
</template>
<script>
export default {
  created() {
    // eslint-disable-next-line no-console
    // console.log('this.$route', this.$route)
  },
}
</script>
<style lang=""></style>
