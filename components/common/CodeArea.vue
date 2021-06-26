<!-- CodeArea's must be typed with high attention to
whitespaces due to how <pre> tag is rendering code.
Always align <CodeArea> tag all the way to the left. -->

<template>
  <pre id="highlighting" aria-hidden="true">
    <code id="highlighting-content" :class="'language-' + lang">
      <slot></slot>
  </code></pre>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism.css";

export default {
  props: {
    lang: {
      type: String,
      default: "html",
    },
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style scoped lang="scss">
#highlighting {
  background: $light-gray;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 0 36px 0 0;

  &::first-line {
    font-size: 0;
  }
}
</style>
