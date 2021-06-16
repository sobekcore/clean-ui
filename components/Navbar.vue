<template>
  <div class="margin">
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="logo">
          <img class="logo-img" src="~/assets/images/logo.png" />
          Clean UI
        </li>
        <li class="navbar-item">Home</li>
        <li class="navbar-item">About</li>
        <li class="navbar-item">Components</li>
      </ul>
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
    width: 100%;
    z-index: 99;

    .navbar-list {
      display: inline-flex;
      list-style: none;
      padding: 0;
      margin: 0;

      .navbar-item {
        padding: 18px 22px;
        transition: background 0.15s;

        &:hover {
          background: $light-gray;
          cursor: pointer;
          transition: background 0s;
        }
      }

      .logo {
        display: flex;
        font-size: 24px;
        align-items: center;
        font-family: "IBM Plex Sans", sans-serif;
        padding: 0 18px;

        .logo-img {
          margin-right: 7px;
          width: 32px;
        }
      }
    }
  }
}
</style>
