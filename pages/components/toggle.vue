<template>
  <div class="component">
    <ComponentHeader>Toggle</ComponentHeader>
    <ComponentPreview>
      <input class="cui-toggle-input" />
    </ComponentPreview>
    <ClientOnly>
      <ComponentContent>
        <template slot="design">
          <ComponentSection class="component-section-wrapper">
            <template slot="title">Component usage</template>
            <template slot="text">
              Toggle switcher is a widely used component as a replacement for classic checkbox. For some of
              the usage either checkbox or toggle switcher may be beter depending on the action you want to
              represent.
            </template>
          </ComponentSection>

          <ComponentSection class="component-section-wrapper">
            <template slot="title">Design profile</template>
            <template slot="text">
              Our toggle has a really classical and familiar design. It has inherited from a modern standards
              of how toggles on the web look like. Any user will recognize it's design and purpose on the
              first glance.
            </template>
          </ComponentSection>

          <ComponentSection class="component-section-wrapper">
            <template slot="title">Customization</template>
            <template slot="text">
              Toggle is a customizable UI component. It can take up to 4 parameters which change diferent
              things. The first one changes main color of the toggle when its turned on, the second one
              changes color of the background when its off. The third one changes color of the switcher
              circle, and the fourth one changes border radius of a whole switcher, so you can make it fully
              circular or square-ish etc.
            </template>
          </ComponentSection>
        </template>

        <template slot="implementation">
          <ComponentSection class="component-section-wrapper">
            <template slot="title">Implementation</template>
            <template slot="text">
              <!-- eslint-disable -->
<CodeArea lang="html">
    &lt;input class="cui-toggle-input" /&gt;
</CodeArea>
<CodeArea lang="js">
    CleanUI._Systemic.Toggle(
        "#ea596e", // active color
        "#c8c8c8", // background color
        "#ffffff", // switch color
        "26px" // border radius
    );
</CodeArea>
              <!-- eslint-enable -->
              To add such a toggle into your UI you need to have proper object instance initialized, as well
              as it being imported into you project. To properly implement library into your code you need to
              have both HTML and JavaScript added.
            </template>
          </ComponentSection>
        </template>

        <template slot="code">
          <ComponentSection class="component-section-wrapper" type="tooltip">
            <template slot="tooltip">
              Please, have in mind that source Code of our components is still somewhat experimental feature.
              However we place great emphasis on our code transparency so everyone can know what they are
              dealing with.
            </template>
          </ComponentSection>
          <ComponentSection class="component-section-wrapper">
            <template slot="title">HTML</template>
            <template slot="text">
              <!-- eslint-disable -->
<CodeArea lang="html">
    &lt;div class="cui-toggle"&gt;
        &lt;div class="cui-toggle-cover"&gt;
            &lt;div class="cui-toggle-switch"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;input class="cui-toggle-input" /&gt;
    &lt;/div&gt;
</CodeArea>
              <!-- eslint-enable -->
            </template>
          </ComponentSection>
          <ComponentSection class="component-section-wrapper">
            <template slot="title">CSS</template>
            <template slot="text">
              <!-- eslint-disable -->
<CodeArea lang="css">
    .cui-toggle {
        position: relative;
        display: inline-block;
        text-align: center;
        z-index: 1;
    }

    .cui-toggle-input {
        position: absolute;
        transform: translate(-30px, -30px);
        border-radius: 26px;
        height: 30px;
        width: 60px;
        cursor: pointer;
        margin: 0;
        opacity: 0;
    }

    .cui-toggle-cover {
        background: #c8c8c8;
        border: 2px solid #c8c8c8;
        border-radius: 26px;
        height: 30px;
        width: 60px;
        padding: 2px 3px;
        transition: 0.18s ease;
    }

    .cui-toggle-switch {
        background: #ffffff;
        border-radius: 26px;
        height: 22px;
        width: 22px;
        margin-left: 0px;
        transition: 0.12s ease;
    }
</CodeArea>
              <!-- eslint-enable -->
            </template>
          </ComponentSection>
        </template>
      </ComponentContent>
    </ClientOnly>
  </div>
</template>

<script>
import { _Systemic } from "~/library/clean-ui";
import ComponentHeader from "~/components/components/ComponentHeader.vue";
import ComponentPreview from "~/components/components/ComponentPreview.vue";
import ComponentContent from "~/components/components/ComponentContent.vue";
import ComponentSection from "~/components/components/ComponentSection.vue";
import CodeArea from "~/components/common/CodeArea.vue";

export default {
  components: {
    ComponentHeader,
    ComponentPreview,
    ComponentContent,
    ComponentSection,
    CodeArea,
  },
  mounted() {
    _Systemic.Toggle();
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
