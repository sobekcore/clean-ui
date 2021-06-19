<template>
  <div id="wrapper">
    <Navbar />
    <Usage />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Usage from "~/components/content/Usage.vue";

export default {
  components: {
    Navbar,
    Usage,
  },
};
</script>
