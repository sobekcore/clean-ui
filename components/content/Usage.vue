<template>
  <section class="wrapper">
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

  p {
    font-size: 21px;
    margin: 0;
  }
}
</style>
