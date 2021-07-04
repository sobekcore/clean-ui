<template>
  <article class="component-content">
    <slot v-if="$nuxt.$route.hash == '#implementation'" name="implementation"></slot>
    <slot v-else-if="$nuxt.$route.hash == '#code'" name="code"></slot>
    <slot v-else name="design"></slot>
  </article>
</template>

<style scoped lang="scss">
.component-content {
  background: white;
  border-bottom: 2px solid $light-gray;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 22px 20px;

  @media (max-width: $medium-content) {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
}
</style>
