<script setup lang="ts">
defineProps<{ eyebrow?: string }>()
</script>
<!-- Une phrase forte, seule à l'écran -->
<template>
  <div class="slidev-layout gc-dark gc-statement">
    <div>
      <div v-if="eyebrow" class="eyebrow">{{ eyebrow }}</div>
      <slot />
    </div>
  </div>
</template>
