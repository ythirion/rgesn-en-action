<script setup lang="ts">
const props = defineProps<{ number?: string | number; value?: string | number; eyebrow?: string }>()
// `value` : ancien nom de la prop, gardé pour les slides existantes
const label = String(props.number ?? props.value ?? '').padStart(2, '0')
</script>
<template>
  <div class="slidev-layout gc-dark gc-section">
    <div class="num-box" aria-hidden="true">{{ label }}</div>
    <div>
      <div v-if="eyebrow" class="eyebrow">{{ eyebrow }}</div>
      <slot />
    </div>
  </div>
</template>
