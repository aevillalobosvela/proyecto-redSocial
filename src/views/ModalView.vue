<template>
  <div class="modalperfil">
    <MainLayout />
    <ModalPerfil />
  </div>
</template>

<script>
import MainLayout from "@/components/MainLayout.vue";
import ModalPerfil from "@/components/ModalPerfil.vue";
export default {
  components: {
    MainLayout,
    ModalPerfil,
  },
};
</script>
<style>
.modalperfil {
  background-image: url("../assets/f1.png");
}
</style>
