<template>
  <nav class="components">
    <h3 class="component-title">Buttons</h3>
    <nuxt-link class="link" to="/components/classic-button">
      <div class="component">Classic Button</div>
    </nuxt-link>

    <h3 class="component-title">Pickers</h3>
    <nuxt-link class="link" to="/components/timepicker">
      <div class="component">Timepicker</div>
    </nuxt-link>
    <nuxt-link class="link" to="/components/datepicker">
      <div class="component">Datepicker</div>
    </nuxt-link>
    <nuxt-link class="link" to="/components/percantage">
      <div class="component">Percantage</div>
    </nuxt-link>

    <h3 class="component-title">Helpers</h3>
    <nuxt-link class="link" to="/components/tooltip">
      <div class="component">Tooltip</div>
    </nuxt-link>

    <h3 class="component-title">Systemic</h3>
    <nuxt-link class="link" to="/components/slider">
      <div class="component">Slider</div>
    </nuxt-link>
  </nav>
</template>

<style scoped lang="scss">
.components {
  position: fixed;
  display: flexbox;
  background: white;
  border-right: 2px solid $light-gray;
  box-shadow: 1px 0 3px rgb(0 0 0 / 10%), inset 0 2px 3px rgb(0 0 0 / 10%);
  height: calc(100% - 60px);
  padding: 13px 8px;
  z-index: 100;

  .component-title {
    font-size: 16px;
    font-weight: normal;
    padding: 3px 5px;
    margin: 0;
  }

  .component-title:not(:first-child) {
    margin: 13px 0 0 0;
  }

  .link {
    .component {
      font: 14px "IBM Plex Sans", sans-serif;
      padding: 7px 15px;
      transition: 0.12s transform ease-out;
    }

    .component:hover {
      transform: translateX(6px);
    }
  }

  .nuxt-link-active {
    color: $main-pink;
  }
}
</style>
