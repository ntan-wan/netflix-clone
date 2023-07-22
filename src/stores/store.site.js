import { defineStore } from 'pinia';

import LayoutBlank from '@/views/layout/Layout.Blank.vue';
import LayoutLanding from '@/views/layout/Layout.Landing.vue';

export const useSiteStore = defineStore('site', {
  state: () => ({
    layout: LayoutBlank,
  }),
  actions: {
    setLayout(layout) {
      if (layout === 'landing') {
        this.layout = LayoutLanding;
      }
    },
  },
});
