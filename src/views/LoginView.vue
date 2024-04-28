<template>
  <div>
    <LoginComp />
    <FooterLayout/>
  </div>
</template>

<script>
import LoginComp from "@/components/LoginComp.vue";
import FooterLayout from "@/components/FooterLayout.vue";
export default {
  components: {
    LoginComp,
    FooterLayout
  }
}
</script>

<style>
body {
    background-image: url('../assets/fondo3.png');
}
</style>