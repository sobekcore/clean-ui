<template>
  <div v-if="$nuxt.$route.path == '/components'">
    <Components />
  </div>
  <div v-else>
    <NuxtChild />
  </div>
</template>

<script>
import Components from "~/components/content/Components.vue";

export default {
  components: {
    Components,
  },
  layout: "components",
};
</script>
