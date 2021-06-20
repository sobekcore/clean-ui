<template>
  <div class="wrapper">
    <Navbar />
    <ComponentsSidebar />
    <main class="content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import ComponentsSidebar from "~/components/components/ComponentsSidebar.vue";

export default {
  components: {
    Navbar,
    ComponentsSidebar,
  },
};
</script>

<style scoped lang="scss">
.content {
  margin-left: 138px;
}
</style>
