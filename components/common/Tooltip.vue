<template>
  <div class="tooltip-wrapper">
    <div class="tooltip-icon">
      <span class="material-icons-outlined">info</span>
    </div>
    <p class="tooltip-text">
      <slot></slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
.tooltip-wrapper {
  display: flex;
  border: 2px solid $main-pink;
  border-radius: 6px;

  .tooltip-icon,
  .tooltip-text {
    display: flex;
    align-items: center;
    padding: 0 12px;
  }

  .tooltip-icon {
    background: rgba($main-pink, 0.15);

    .material-icons-outlined {
      color: $main-pink;
    }
  }

  .tooltip-text {
    color: $main-pink;
  }
}
</style>
