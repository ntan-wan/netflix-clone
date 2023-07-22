<script setup>
import LogoNetflix from '@/components/LogoNetflix.vue';
import CustomButton from '@/components/Custombutton.vue';
import CustomDropdown from '@/components/CustomDropdown.vue';
import { useMediaQuery } from '@vueuse/core';
import { computed } from 'vue';

const isLargeScreen = useMediaQuery('(min-width: 960px)');
const logoSize = computed(() => {
  return isLargeScreen.value ? 'big' : 'small';
});
</script>

<template>
  <nav class="navbar-custom">
    <div class="navbar-content">
      <div class="navbar-brand"><LogoNetflix :size="logoSize" /></div>
      <div><CustomDropdown /></div>
      <div><CustomButton size="small">Sign In</CustomButton></div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-custom {
  height: 5rem;
  background-color: transparent;
  position: absolute;
  left: 0;
  right: 0;

  .navbar-content {
    max-width: calc(100% - 3rem);
    margin: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 5.375rem;

    .navbar-brand {
      margin-right: auto;
    }
  }
}
</style>
