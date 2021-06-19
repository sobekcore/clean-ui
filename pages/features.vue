<template>
  <div id="wrapper">
    <Navbar />
    <Features />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Features from "~/components/content/Features.vue";

export default {
  components: {
    Navbar,
    Features,
  },
};
</script>
