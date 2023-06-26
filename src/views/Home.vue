<template>
  <Container>
    <div class="test">11</div>
  </Container>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    window.addEventListener('resize', function () {
      console.log("resize")
    })
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.test {
  font-size: 16px;
  color: red;
  transform: scale(1, 1);
}
</style>