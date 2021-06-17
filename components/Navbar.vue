<template>
  <div class="margin">
    <nav class="navbar">
      <a class="link" href="/">
        <div class="logo">
          <img class="logo-img" src="~/assets/images/logo.png" />
          <span class="logo-text">Clean UI</span>
        </div>
      </a>
      <a class="link" href="/start">
        <div class="navbar-item">Home</div>
      </a>
      <a class="link" href="/about">
        <div class="navbar-item">About</div>
      </a>
      <a class="link" href="/components">
        <div class="navbar-item">Components</div>
      </a>
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
    box-shadow: 0 1px 3px rgb(0 0 0 / 10%);
    display: inline-flex;
    width: 100%;
    z-index: 99;

    .link {
      .navbar-item {
        padding: 18px 22px;
        transition: background 0.15s;

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
  }
}
</style>
