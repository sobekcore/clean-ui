<template>
  <div class="wrapper">
    <Navbar />
    <ComponentsNavbar />
    <main class="content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import ComponentsNavbar from "~/components/ComponentsNavbar.vue";

export default {
  components: {
    Navbar,
    ComponentsNavbar,
  },
};
</script>

<style scoped lang="scss">
.content {
  margin-left: 122px;
}
</style>
