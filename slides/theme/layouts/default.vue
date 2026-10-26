<script setup lang="ts">
defineProps<{ eyebrow?: string }>()
</script>
<template>
  <div class="slidev-layout">
    <div v-if="eyebrow" class="eyebrow">{{ eyebrow }}</div>
    <slot />
  </div>
</template>
