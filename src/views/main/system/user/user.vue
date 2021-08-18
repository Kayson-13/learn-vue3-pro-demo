<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

import PageSearch from 'components/page-search/src/page-search.vue';
import PageContent from 'components/page-content/src/page-content.vue';

import { searchFormConfig } from './config/search.config';
import { contentTableConfig } from './config/content.config';

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    };
  }
});
</script>

<style scoped lang="less"></style>
