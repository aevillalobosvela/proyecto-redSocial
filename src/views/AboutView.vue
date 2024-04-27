<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button :class="'btn btn-light'">
    <router-link to="/">Login</router-link>
  </button>
  <router-view />
</template>

<script>
</script>
