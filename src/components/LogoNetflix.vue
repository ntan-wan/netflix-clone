<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: { type: String, default: '' },
});
const logoStyle = computed(() => ({
  'logo-big': props.size === 'big',
}));
</script>

<template>
  <a href="/" class="logo-link" :class="logoStyle"
    ><img
      class="logo-img"
      src="@/assets/imgs/logo-netflix.svg"
      alt="logo netflix"
  /></a>
</template>

<style scoped>
.logo-link {
  display: inline-block;
  width: 89px;
  height: 24px;

  &.logo-big {
    width: 148px;
    height: 40px;
  }

  .logo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
