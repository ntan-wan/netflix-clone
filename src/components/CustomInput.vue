<script setup>
const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, default: 'text' },
});
</script>

<template>
  <div class="input-holder">
    <input
      class="input-custom"
      :id="label"
      :name="label"
      placeholder=" "
      :type="type"
    />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<style scoped>
.input-holder {
  display: inline-flex;
  flex-direction: column;
  position: relative;
}
.input-custom {
  border-radius: 4px;
  border: 1px solid rgba(128, 128, 128, 0.7);
  background: rgba(22, 22, 22, 0.7);
  padding: 1.25rem 1rem 0.25rem;
  color: var(--input-text-color);

  @media screen and (min-width: 600px) {
    padding: 1.5rem 1rem 0.5rem;
  }
}

.input-custom:focus + label,
input:not(:placeholder-shown) + label {
  transform: translate(0, -0.7rem);
  font-size: 0.8rem;
}

label {
  color: var(--input-label-color);
  transition: all 0.2s ease-out;
  position: absolute;
  top: 0.875rem;
  left: 0.875rem;
}
</style>
