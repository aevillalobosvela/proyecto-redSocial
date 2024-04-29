<template>
  <div class="main">
    <MainLayout />
    <MainComp />
  </div>
</template>

<script>
import MainComp from "@/components/MainComp.vue";
import MainLayout from "@/components/MainLayout.vue";
export default {
  components: {
    MainComp,
    MainLayout,
  },
};
</script>
<style>
.main {
  background-image: url("../assets/f3.png");
}
</style>
