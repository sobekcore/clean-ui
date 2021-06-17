<template>
  <header class="wrapper">
    <div class="home">
      <img class="home-img" src="~/assets/images/logo.png" />
      <div class="home-text">
        <h1 class="home-title">Clean UI</h1>
        <button class="home-button">Get started</button>
      </div>
      <div class="home-media">
        <MediaBadges />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  padding: 20px 20px 34vh;

  @media (max-height: 760px) {
    padding: 20px;
  }

  .home {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .home-img {
      margin-left: 5px;
      height: 230px;
      width: 230px;
    }

    .home-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .home-title {
        font-size: 56px;
        font-family: "IBM Plex Sans", sans-serif;
        font-weight: normal;
        white-space: nowrap;
        margin: 0 20px 20px;
      }

      .home-button {
        padding: 14px 38px;
        border-radius: 8px;
        border: 2px solid $main-pink;
        font-family: "Open Sans", sans-serif;
        font-size: 19px;
        color: $main-pink;
        background: white;
        transition: 0.2s ease-out;
        outline: none;

        &:hover {
          background: $main-pink;
          color: white;
          cursor: pointer;
        }
      }
    }

    .home-media {
      grid-column: 1 / span 2;
      text-align: center;
    }
  }
}
</style>
