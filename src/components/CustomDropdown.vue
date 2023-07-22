<template>
  <select class="dropdown-custom" name="language" id="language">
    <option class="dropdown-item" lang="en" label="English" value="en-MY">
      English
    </option>
    <option class="dropdown-item" lang="my" label="Malay" value="bm-MY">
      Bahasa Melayu
    </option>
  </select>
</template>

<style scoped>
.dropdown-custom {
  background: rgba(22, 22, 22, 0.7);
  border: 1px solid rgba(128, 128, 128, 0.7);
  min-width: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: 4px;
  .dropdown-item {
    background-color: white;
  }
}
</style>
