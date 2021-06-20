<template>
  <Components v-if="$nuxt.$route.path == '/components'" />
  <NuxtChild v-else />
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
