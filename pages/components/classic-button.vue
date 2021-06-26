<template>
  <div class="component">
    <ComponentHeader title="Classic Button" />
    <ComponentContent>
      <template slot="design">
        <ComponentSection class="component-section-wrapper">
          <template slot="title">Component usage</template>
          <template slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, orci eu
            vestibulum molestie, felis augue aliquet tortor, vel luctus metus est eget dolor. Nulla
            fermentum ligula vel tristique varius. Morbi ullamcorper ultrices leo id pulvinar.
            Nullam condimentum massa augue, non dignissim purus sagittis sit amet. Curabitur eu
            pharetra velit. Suspendisse condimentum arcu massa, sed faucibus leo mattis ac.
          </template>
        </ComponentSection>

        <ComponentSection class="component-section-wrapper">
          <template slot="title">Design profile</template>
          <template slot="text">
            Nunc eu nisl posuere, rutrum est consectetur, rutrum metus. Sed hendrerit elit sed enim
            placerat finibus. Quisque tincidunt, risus nec vehicula interdum, orci sem accumsan
            erat, in consequat enim mi quis enim. Aenean non sapien orci. Donec condimentum, dolor
            quis laoreet ultricies, erat lectus sodales felis, et facilisis nisl tortor non elit.
            Etiam dignissim consequat scelerisque. Fusce at pretium leo, at bibendum elit. Maecenas
            dictum dolor sit amet orci efficitur congue. Aliquam erat volutpat.
          </template>
        </ComponentSection>

        <ComponentSection class="component-section-wrapper">
          <template slot="title">Customization</template>
          <template slot="text">
            Fusce ornare consequat consequat. Maecenas cursus odio a ante pulvinar volutpat. Integer
            id blandit ipsum. Vestibulum mattis vitae lorem ut efficitur. Praesent purus dolor,
            volutpat a dui at, dignissim porta nisi. Nam rutrum commodo odio, at maximus enim
            molestie in. Aliquam tempor ultrices mauris nec blandit. Quisque eget sodales felis.
            Morbi in libero euismod tellus cursus eleifend. Quisque non lectus sollicitudin, viverra
            magna non, auctor tortor. Praesentlacinia nunc vel erat tristique aliquet.
          </template>
        </ComponentSection>
      </template>

      <template slot="implementation">
        <ComponentSection class="component-section-wrapper">
          <template slot="title">Implementation</template>
          <template slot="text">
            <!-- eslint-disable -->
<CodeArea lang="js">
    CleanUI._Buttons.ClassicButton(
        "#ea596e", // primary color
        "#ffffff" // secondary color
    );
</CodeArea>
            <!-- eslint-enable -->
            Nunc eu nisl posuere, rutrum est consectetur, rutrum metus. Sed hendrerit elit sed enim
            placerat finibus. Quisque tincidunt, risus nec vehicula interdum, orci sem accumsan
            erat, in consequat enim mi quis enim. Aenean non sapien orci. Donec condimentum, dolor
            quis laoreet ultricies, erat lectus sodales felis, et facilisis nisl tortor non elit.
            Etiam dignissim consequat scelerisque. Fusce at pretium leo, at bibendum elit. Maecenas
            dictum dolor sit amet orci efficitur congue. Aliquam erat volutpat.
          </template>
        </ComponentSection>
      </template>

      <template slot="code">
        <ComponentSection class="component-section-wrapper">
          <template slot="title">Code</template>
          <template slot="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, orci eu
            vestibulum molestie, felis augue aliquet tortor, vel luctus metus est eget dolor. Nulla
            fermentum ligula vel tristique varius. Morbi ullamcorper ultrices leo id pulvinar.
            Nullam condimentum massa augue, non dignissim purus sagittis sit amet. Curabitur eu
            pharetra velit. Suspendisse condimentum arcu massa, sed faucibus leo mattis ac.
          </template>
        </ComponentSection>
        <ComponentSection class="component-section-wrapper">
          <template slot="title">HTML</template>
          <template slot="text">
            <!-- eslint-disable -->
<CodeArea lang="html">
    &lt;button class="cui-classic-button"&gt;Classic Button&lt;/button&gt;
</CodeArea>
            <!-- eslint-enable -->
            Nunc eu nisl posuere, rutrum est consectetur, rutrum metus. Sed hendrerit elit sed enim
            placerat finibus. Quisque tincidunt, risus nec vehicula interdum, orci sem accumsan
            erat, in consequat enim mi quis enim. Aenean non sapien orci. Donec condimentum, dolor
            quis laoreet ultricies, erat lectus sodales felis, et facilisis nisl tortor non elit.
            Etiam dignissim consequat scelerisque. Fusce at pretium leo, at bibendum elit. Maecenas
            dictum dolor sit amet orci efficitur congue. Aliquam erat volutpat.
          </template>
        </ComponentSection>
        <ComponentSection class="component-section-wrapper">
          <template slot="title">CSS</template>
          <template slot="text">
            <!-- eslint-disable -->
<CodeArea lang="css">
    .cui-classic-button {
        border: 2px solid #ea596e;
        color: #ea596e;
        background: #ffffff;
        padding: 10px 18px;
        margin: 3px 6px;
        border-radius: 4px;
        font-size: 16px;
        transition: 0.12s background, 0.12s color;
        transition-timing-function: ease-out;
    }

    .cui-classic-button:hover {
        background: #ea596e;
        color: #ffffff;
        cursor: pointer;
    }
</CodeArea>
            <!-- eslint-enable -->
            Fusce ornare consequat consequat. Maecenas cursus odio a ante pulvinar volutpat. Integer
            id blandit ipsum. Vestibulum mattis vitae lorem ut efficitur. Praesent purus dolor,
            volutpat a dui at, dignissim porta nisi. Nam rutrum commodo odio, at maximus enim
            molestie in. Aliquam tempor ultrices mauris nec blandit. Quisque eget sodales felis.
            Morbi in libero euismod tellus cursus eleifend. Quisque non lectus sollicitudin, viverra
            magna non, auctor tortor. Praesentlacinia nunc vel erat tristique aliquet.
          </template>
        </ComponentSection>
      </template>
    </ComponentContent>
  </div>
</template>

<script>
import ComponentHeader from "~/components/components/ComponentHeader.vue";
import ComponentContent from "~/components/components/ComponentContent.vue";
import ComponentSection from "~/components/components/ComponentSection.vue";
import CodeArea from "~/components/common/CodeArea.vue";

export default {
  components: {
    ComponentHeader,
    ComponentContent,
    ComponentSection,
    CodeArea,
  },
};
</script>

<style scoped lang="scss">
.component {
  margin: 26px auto;
  max-width: 1200px;
  width: 100%;

  @media (max-width: $medium-content) {
    max-width: 1252px;
    margin: 0;
  }

  // Content margin settings for each section
  .component-section-wrapper:not(:first-child) {
    margin-top: 40px;
  }
}
</style>
