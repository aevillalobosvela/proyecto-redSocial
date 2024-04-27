<template>
  <div class="login">
    <LoginComp />
  </div>
</template>

<script>
import LoginComp from "@/components/LoginComp.vue";
export default {
  components: {
    LoginComp,
  }
}
</script>

<style>
body {
    background-image: url('../assets/fondo3.png');
}
</style>