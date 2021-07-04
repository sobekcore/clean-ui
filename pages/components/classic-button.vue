<template>
  <div class="component">
    <ComponentHeader>Classic Button</ComponentHeader>
    <ClientOnly>
      <ComponentContent>
        <template slot="design">
          <ComponentSection class="component-section-wrapper">
            <template slot="title">Component usage</template>
            <template slot="text">
              Classic Button is a stock-standard button to use on your websites. It's code is really simple so
              it wont drain your resources unnecessarily. Designed to look good on the most of the website
              layouts out there.
            </template>
          </ComponentSection>

          <ComponentSection class="component-section-wrapper">
            <template slot="title">Design profile</template>
            <template slot="text">
              Classic Button has a rather gentle design, it presents a well-known and familiar style for most
              of the users. The button fits best as a informational or a slightly more important button.
            </template>
          </ComponentSection>

          <ComponentSection class="component-section-wrapper">
            <template slot="title">Customization</template>
            <template slot="text">
              Classic Button is a customizable UI component. For now it has 2 options, both of them are
              optional. First one is a main color of a button (the one that fills button on hover) and the
              second one is a secondary button color (the one that button is filled at the beginning).
            </template>
          </ComponentSection>
        </template>

        <template slot="implementation">
          <ComponentSection class="component-section-wrapper">
            <template slot="title">Implementation</template>
            <template slot="text">
              <!-- eslint-disable -->
<CodeArea lang="html">
    &lt;button class="cui-classic-button"&gt;Classic Button&lt;/button&gt;
</CodeArea>
<CodeArea lang="js">
    CleanUI._Buttons.ClassicButton(
        "#ea596e", // primary color
        "#ffffff" // secondary color
    );
</CodeArea>
              <!-- eslint-enable -->
              To implement such a button you need to have any of the necesary object instances for it
              initialized, and to do so you need to have library imported into your project with the way of
              your choice. If the instance allows to pass parameters you can do so. To properly implement
              library into your code you need to have both HTML and JavaScript added.
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
    &lt;button class="cui-classic-button"&gt;Classic Button&lt;/button&gt;
</CodeArea>
              <!-- eslint-enable -->
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
            </template>
          </ComponentSection>
        </template>
      </ComponentContent>
    </ClientOnly>
  </div>
</template>

<script>
import CleanUI from "@cleanlabs/clean-ui";
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
  mounted() {
    CleanUI._Buttons.ClassicButton();
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
