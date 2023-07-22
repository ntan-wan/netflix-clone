<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: { type: String, default: '' },
});

const btnStyle = computed(() => ({
  'btn-small': props.size === 'small',
  'btn-big': props.size === 'big',
}));
</script>

<template>
  <button class="btn-custom" :class="btnStyle">
    <slot />
  </button>
</template>

<style scoped>
.btn-custom {
  background-color: var(--color-primary);
  color: var(--button-text-color);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1.125rem;
  font-family: var(--font-family-medium);

  &.btn-small {
    font-size: 0.875rem;
    padding: 0.25rem 1rem;
  }

  &.btn-big {
    font-size: 1.5rem;
    padding: 0.75rem 1.5rem;
  }
}
</style>
