<template>
  <div id="wrapper">
    <Navbar />
    <Support />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Support from "~/components/content/Support.vue";

export default {
  components: {
    Navbar,
    Support,
  },
};
</script>
