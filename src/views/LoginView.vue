<template>
  <div class="login">
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
.login {
  background-image: url("../assets/f1.png"); 
}
</style>