<template>
  <header class="home">
    <img class="home-img" src="~/assets/images/logo.png" />
    <div class="home-text">
      <h1 class="home-title">Clean UI</h1>
      <button class="home-button">Get started</button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  padding: 20px 20px 35vh;

  @media (max-height: 640px) {
    padding: 20px;
  }

  .home-img {
    width: 230px;
    margin-right: 20px;
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
}
</style>
