<template>
  <div id="wrapper">
    <Navbar />
    <Components />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Components from "~/components/content/Components.vue";

export default {
  components: {
    Navbar,
    Components,
  },
};
</script>
