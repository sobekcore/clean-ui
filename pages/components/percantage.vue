<template>
  <div class="component">
    <ComponentHeader>Percantage</ComponentHeader>
    <ClientOnly>
      <ComponentContent>
        <template slot="design">
          <ComponentSection class="component-section-wrapper">
            <template slot="title">Component usage</template>
            <template slot="text">
              Percantage picker is a native HTML's select inspired component. With it it's really easy to
              implement select fields that are highly cutomizable in visual aspects and well as functional
              ones.
            </template>
          </ComponentSection>

          <ComponentSection class="component-section-wrapper">
            <template slot="title">Design profile</template>
            <template slot="text">
              Percantage picker has a cleaned-up design of a classic HTML select tag. Small details like
              smoother responses or nicer hover effects add clutch functionalities that define the usage of
              those kind of components.
            </template>
          </ComponentSection>

          <ComponentSection class="component-section-wrapper">
            <template slot="title">Customization</template>
            <template slot="text">
              Percantage picker is a customizable component that changes its look and functionalities
              depending on passed parameters. There are three parameters to pass in, first one is a primary
              color which is a main hover color, second one is a color of a text on hover, and the last one is
              a boolean value which defines if the drop-down should close after clicking on its values or not.
            </template>
          </ComponentSection>
        </template>

        <template slot="implementation">
          <ComponentSection class="component-section-wrapper">
            <template slot="title">Implementation</template>
            <template slot="text">
              <!-- eslint-disable -->
<CodeArea lang="html">
    &lt;div class="cui-percantage"&gt;
        &lt;input class="cui-percantage-input" /&gt;
    &lt;/div&gt;
</CodeArea>
<CodeArea lang="js">
    CleanUI._Pickers.Percantage(
        "#ea596e", // primary color
        "#ffffff", // secondary color
        "true" // close on click
    );
</CodeArea>
              <!-- eslint-enable -->
              This percantage picker is a adaptation of native &lt;select&gt; HTML tag. However it is more
              customozable in its look and actions. Under the hood it adds a lot of DOM elements in various
              loops to save your time in doing so. Made very clean and efficient.
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
    &lt;div class="cui-percantage"&gt;
        &lt;input class="cui-percantage-input" /&gt;
        &lt;ul class="cui-percantage-list"&gt;
            &lt;li class="cui-percantage-item"&gt;0%&lt;/li&gt;
            &lt;li class="cui-percantage-item"&gt;10%&lt;/li&gt;
            &lt;li class="cui-percantage-item"&gt;20%&lt;/li&gt;
            &lt;li class="cui-percantage-item"&gt;30%&lt;/li&gt;
            &lt;li class="cui-percantage-item"&gt;40%&lt;/li&gt;
            &lt;li class="cui-percantage-item"&gt;50%&lt;/li&gt;
            &lt;li class="cui-percantage-item"&gt;60%&lt;/li&gt;
            &lt;li class="cui-percantage-item"&gt;70%&lt;/li&gt;
            &lt;li class="cui-percantage-item"&gt;80%&lt;/li&gt;
            &lt;li class="cui-percantage-item"&gt;90%&lt;/li&gt;
            &lt;li class="cui-percantage-item"&gt;100%&lt;/li&gt;
        &lt;/ul&gt;
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
    .cui-percantage {
        position: relative;
        display: inline-block;
        z-index: 1;
    }

    .cui-percantage-list {
        display: none;
        position: absolute;
        list-style: none;
        max-height: 180px;
        width: 100%;
        overflow-y: scroll;
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 0 0 0 6px;
        border-top: none;
        padding: 0;
        margin: 0;
    }

    .cui-percantage-item:hover {
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
