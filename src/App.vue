<script setup>
import { computed } from 'vue';
import { useSiteStore } from '@/stores/store.site';

const siteStore = useSiteStore();
const layout = computed(() => {
  return siteStore.layout;
});
</script>

<template>
  <component :is="layout || 'div'">
    <router-view />
  </component>
</template>
