<template>
  <section class="component-preview">
    <div class="component-preview-content">
      <div class="component-preview-badge">
        <span class="component-preview-badge-text" role="img">Preview</span>
      </div>
      <div class="component-preview-content-offset">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.component-preview {
  background: white;
  border-bottom: 2px solid $light-gray;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 26px;

  @media (max-width: $medium-content) {
    margin-bottom: 0;
  }

  .component-preview-content {
    padding: 0 54px 38px;

    .component-preview-content-offset {
      display: flex;
      align-items: center;
      position: relative;
      margin-top: -38px;
      z-index: 1;
    }

    .component-preview-badge {
      position: relative;
      padding: 38px 54px;
      transform: translateX(-54px);
      overflow: hidden;

      .component-preview-badge-text {
        position: absolute;
        background: $main-pink;
        transform: rotate(-45deg) translateX(-39%) translateY(-360%);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
        font-size: 12px;
        padding: 2px 32px;
        color: white;
      }
    }
  }
}
</style>
