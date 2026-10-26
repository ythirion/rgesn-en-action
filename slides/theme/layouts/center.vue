<script setup lang="ts">
defineProps<{ eyebrow?: string }>()
</script>
<template>
  <div class="slidev-layout gc-center">
    <div class="gc-center__inner">
      <div v-if="eyebrow" class="eyebrow">{{ eyebrow }}</div>
      <slot />
    </div>
  </div>
</template>
