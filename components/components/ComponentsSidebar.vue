<template>
  <nav class="components-sidebar">
    <h3 class="components-sidebar-title">Buttons</h3>
    <NuxtLink class="components-sidebar-link" to="/components/classic-button">
      <div class="components-sidebar-item">Classic Button</div>
    </NuxtLink>

    <h3 class="components-sidebar-title">Pickers</h3>
    <NuxtLink class="components-sidebar-link" to="/components/timepicker">
      <div class="components-sidebar-item">Timepicker</div>
    </NuxtLink>
    <NuxtLink class="components-sidebar-link" to="/components/datepicker">
      <div class="components-sidebar-item">Datepicker</div>
    </NuxtLink>
    <NuxtLink class="components-sidebar-link" to="/components/percantage">
      <div class="components-sidebar-item">Percantage</div>
    </NuxtLink>

    <h3 class="components-sidebar-title">Helpers</h3>
    <NuxtLink class="components-sidebar-link" to="/components/tooltip">
      <div class="components-sidebar-item">Tooltip</div>
    </NuxtLink>

    <h3 class="components-sidebar-title">Systemic</h3>
    <NuxtLink class="components-sidebar-link" to="/components/slider">
      <div class="components-sidebar-item">Slider</div>
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
.components-sidebar {
  position: fixed;
  background: white;
  border-right: 2px solid $light-gray;
  box-shadow: 1px 0 3px rgb(0 0 0 / 10%), inset 0 1px 3px rgb(0 0 0 / 10%);
  height: calc(100% - 60px);
  padding: 13px 8px;
  z-index: 99;

  .components-sidebar-title {
    font-size: 16px;
    font-weight: normal;
    padding: 3px 5px;
    margin: 0;

    &:not(:first-child) {
      margin: 13px 0 0 0;
    }
  }

  .components-sidebar-link {
    .components-sidebar-item {
      font: 14px "IBM Plex Sans", sans-serif;
      padding: 7px 15px;
      transition: 0.12s transform ease-out;
    }

    .components-sidebar-item:hover {
      transform: translateX(7px);
    }
  }

  .nuxt-link-active {
    color: $main-pink;
  }
}
</style>
