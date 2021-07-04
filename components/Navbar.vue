<template>
  <div class="margin">
    <nav class="navbar">
      <NuxtLink class="link home" to="/">
        <div class="logo">
          <img class="logo-img" src="~/assets/images/logo.png" />
          <span class="logo-text">Clean UI</span>
        </div>
      </NuxtLink>
      <NuxtLink class="link" to="/features">
        <div class="navbar-item">Features</div>
      </NuxtLink>
      <NuxtLink class="link" to="/usage">
        <div class="navbar-item">Usage</div>
      </NuxtLink>
      <NuxtLink class="link" to="/components">
        <div class="navbar-item">Components</div>
      </NuxtLink>
      <NuxtLink class="link" to="/support">
        <div class="navbar-item">Support</div>
      </NuxtLink>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.margin {
  height: $navbar-margin;
  width: 100%;

  .navbar {
    position: fixed;
    background: white;
    border-bottom: 2px solid $light-gray;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    display: inline-flex;
    width: 100%;
    z-index: 99;

    .link {
      .navbar-item {
        padding: 18px 22px;
        transition: background 0.2s;

        &:hover {
          background: $light-gray;
          transition: background 0s;
        }
      }

      .logo {
        display: flex;
        align-items: center;
        padding: 13px 18px;

        .logo-img {
          margin-right: 8px;
          height: 32px;
          width: 32px;
        }

        .logo-text {
          font-family: "IBM Plex Sans", sans-serif;
          font-size: 24px;
        }
      }
    }

    .home.nuxt-link-active {
      color: $main-black;
    }

    .nuxt-link-active {
      color: $main-pink;
    }
  }
}
</style>
