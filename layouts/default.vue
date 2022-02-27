<template lang="">
  <div>
    <h1>{{ $route.name }}페이지</h1>
  </div>
</template>
<script>
export default {
  created() {
    // eslint-disable-next-line no-console
    console.log('this.$route', this.$route)
  },
}
</script>
<style lang=""></style>
