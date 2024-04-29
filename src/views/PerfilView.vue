<template>
  <div class="main">
    <MainLayout />
    <PerfilComp />
  </div>
</template>

<script>
import MainLayout from "@/components/MainLayout.vue";
import PerfilComp from "@/components/PerfilComp.vue";
export default {
  components: {
    MainLayout,
    PerfilComp
  },
};
</script>
<style>
.main {
  background-image: url("../assets/f3.png");
}
</style>
