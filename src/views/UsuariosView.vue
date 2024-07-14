<template>
  <div class="main">
    <MainLayout />
    <VerusuarioComp />
  </div>
</template>

<script>
import MainLayout from "@/components/MainLayout.vue";
import VerusuarioComp from "@/components/VerusuarioComp.vue";
export default {
  components: {
    MainLayout,
    VerusuarioComp,
  },
};
</script>
<style>
.main {
  background-image: url("../assets/f3.png");
}
</style>
