<template>
  <div>
    <MainLayout/>
    <MainComp/>
  </div>
</template>

<script>
import MainComp from "@/components/MainComp.vue";
import MainLayout from "@/components/MainLayout.vue";
export default {
  components: {
    MainComp,
    MainLayout
  }
}
</script>

<style>
body {
    background-image: url('../assets/fondo3.png');
}
</style>