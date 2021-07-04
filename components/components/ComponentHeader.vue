<template>
  <header class="component-header">
    <h2 class="component-header-title">
      <slot></slot>
    </h2>
    <nav class="component-header-nav">
      <NuxtLink class="component-header-nav-link" :to="$nuxt.$route.path + '#design'">
        <div class="component-header-nav-item">
          <span class="material-icons">design_services</span>
          <span>Design</span>
        </div>
      </NuxtLink>
      <NuxtLink class="component-header-nav-link" :to="$nuxt.$route.path + '#implementation'">
        <div class="component-header-nav-item">
          <span class="material-icons">settings_applications</span>
          <span>Implementation</span>
        </div>
      </NuxtLink>
      <NuxtLink class="component-header-nav-link" :to="$nuxt.$route.path + '#code'">
        <div class="component-header-nav-item">
          <span class="material-icons">code</span>
          <span>Code</span>
        </div>
      </NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Component",
    },
  },
  watch: {
    $route() {
      if (this.$route.hash === "") {
        this.setAnyHash("#design");
      }
    },
  },
  mounted() {
    if (this.$route.hash === "") {
      this.setAnyHash("#design");
    }
  },
  methods: {
    setAnyHash(param) {
      this.$router.push({ path: this.$route.path, hash: param });
    },
  },
};
</script>

<style scoped lang="scss">
.component-header {
  background: white;
  border-bottom: 2px solid $light-gray;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 26px;
  padding: 24px;

  @media (max-width: $medium-content) {
    margin-bottom: 0;
  }

  .component-header-title {
    font: 28px "IBM Plex Sans", sans-serif;
    padding-bottom: 18px;
    margin: 0;
  }

  .component-header-nav {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    gap: 24px;

    .component-header-nav-link {
      border-top: 2px solid $light-gray;
      border-bottom: 2px solid $light-gray;
      text-align: center;
      width: 100%;

      .component-header-nav-item {
        display: flex;
        align-items: center;
        justify-content: center;
        background: $light-gray;
        padding: 10px 12px;

        & > .material-icons {
          margin-right: 5px;
        }
      }
    }

    .nuxt-link-active {
      border-bottom: 2px solid $main-pink;
    }
  }
}
</style>
