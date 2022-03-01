<template lang="">
  <div>
    <header class="title">
      <NuxtLink to="/" class="logo">home page</NuxtLink>
    </header>
    <Nuxt />
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
