
<script setup>

import { RouterView } from 'vue-router'
</script>

<template>
  <div class="layout-wrapper layout-blank">
    <RouterView />
  </div>
</template>

<style>
.layout-wrapper.layout-blank {
  flex-direction: column;
}

.layout-wrapper.layout-blank{
  background-color: #fff !important;
}
</style>
