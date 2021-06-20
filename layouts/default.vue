<template>
  <div class="wrapper">
    <Navbar />
    <main class="content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
