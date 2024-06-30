<template>
    <div class="modalpassword">
      <MainLayout />
      <ModalPassword />
    </div>
  </template>
  
  <script>
  import MainLayout from "@/components/MainLayout.vue";
  import ModalPassword from "@/components/ModalPassword.vue";
  export default {
    components: {
      MainLayout,
      ModalPassword,
    },
  };
  </script>
  <style>
  .modalpassword {
    background-image: url("../assets/f2.png");
  }
  </style>
  