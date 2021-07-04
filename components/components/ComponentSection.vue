<template>
  <section v-if="type == 'tooltip'" class="component-section">
    <Tooltip>
      <slot name="tooltip" />
    </Tooltip>
  </section>
  <section v-else class="component-section">
    <div class="component-section-header">
      <h3 class="component-section-title">
        <slot name="title" />
      </h3>
      <hr class="component-section-line" />
    </div>
    <p class="component-section-text">
      <slot name="text" />
    </p>
  </section>
</template>

<script>
import Tooltip from "~/components/common/Tooltip.vue";

export default {
  components: {
    Tooltip,
  },
  props: {
    type: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.component-section {
  .component-section-header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    width: 100%;

    .component-section-title {
      font: 22px "IBM Plex Sans", sans-serif;
      font-weight: normal;
      white-space: nowrap;
      margin: 0;
    }

    .component-section-line {
      border: none;
      background: $light-gray;
      border-radius: 6px;
      margin-left: 12px;
      width: 100%;
      height: 3px;
    }
  }

  .component-section-text {
    margin: 0;
  }
}
</style>
