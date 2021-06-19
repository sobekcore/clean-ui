<template>
  <div id="wrapper">
    <Navbar />
    <Start />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Start from "~/components/content/Start.vue";

export default {
  components: {
    Navbar,
    Start,
  },
};
</script>
