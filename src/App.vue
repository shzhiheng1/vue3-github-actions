

<template>
  <div class="app">
    <div class="navigate">
      <RouterLink to="/" active-class="active">首页</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>
    </div>
  </div>
  <div class="main-content">
      <RouterView></RouterView>
    </div>
</template>
<script setup name="App">

console.log(import.meta.env);
</script>

<style scoped>
</style>
