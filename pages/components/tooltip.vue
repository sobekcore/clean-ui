<template>
  <div class="component">
    <ComponentHeader>Tooltip</ComponentHeader>
    <ClientOnly>
      <ComponentContent>
        <template slot="design">
          <ComponentSection class="component-section-wrapper">
            <template slot="title">Component usage</template>
            <template slot="text">
              Our tooltip is a classically looking alert that will bring attention to your viewers. It's
              simple and can easily convey the information that is important. It uses Material Icon as a icon
              in its body.
            </template>
          </ComponentSection>

          <ComponentSection class="component-section-wrapper">
            <template slot="title">Design profile</template>
            <template slot="text">
              Tooltip has a classic design that is very familiar to the users and remind slightly the
              old-school tooltips from the old days of the internet. It's not too complicated as the
              informational components should be.
            </template>
          </ComponentSection>

          <ComponentSection class="component-section-wrapper">
            <template slot="title">Customization</template>
            <template slot="text">
              Tooltip is a customizable UI component. The only thing you can change for now is the overall
              color scheme of the tooltip, it changes everything that is colored on the tooltip so please
              choose slightly more contrasted colors if you want better tooltip visibility.
            </template>
          </ComponentSection>
        </template>

        <template slot="implementation">
          <ComponentSection class="component-section-wrapper">
            <template slot="title">Implementation</template>
            <template slot="text">
              <!-- eslint-disable -->
<CodeArea lang="html">
    &lt;div class="cui-tooltip"&gt;Tooltip&lt;/div&gt;
</CodeArea>
<CodeArea lang="js">
    CleanUI._Helper.Tooltip(
        "#ea596e" // main color
    );
</CodeArea>
              <!-- eslint-enable -->
              To implement this tooltip you need to have a tooltip object instance initialized in your
              project. From on there you can either initialize it empty or pass parameters to it, for now the
              only parameter you can pass is a overall color scheme of a tooltip. To properly implement
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
    &lt;div class="cui-tooltip"&gt;
        &lt;div class="cui-tooltip-icon"&gt;
            &lt;span class="cui-tooltip-material-icon material-icons-outlined"&gt;
                info
            &lt;/span&gt;
        &lt;/div&gt;
        &lt;p class="cui-tooltip-text"&gt;
            Tooltip
        &lt;/p&gt;
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
    .cui-tooltip {
        display: flex;
        border: 2px solid #ea596e;
        border-radius: 6px;
    }

    .cui-tooltip-icon,
    .cui-tooltip-text {
        display: flex;
        align-items: center;
        padding: 0 12px;
    }

    .cui-tooltip-icon {
        background: rgba(234, 89, 110, 0.15);
    }

    .cui-tooltip-material-icon.material-icons-outlined,
    .cui-tooltip-text {
        color: #ea596e;
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
