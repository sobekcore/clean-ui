<template>
  <section class="wrapper">
    <h1>Usage</h1>
    <p>Currently in development process</p>
  </section>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 60px);
  padding-bottom: 34vh;

  @media (max-height: 760px) {
    padding-bottom: 0;
    margin-top: 22px;
  }

  h1,
  p {
    margin: 0;
  }
}
</style>
