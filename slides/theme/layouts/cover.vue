<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ eyebrow?: string; author?: string; image?: string; alt?: string }>()
// Le frontmatter n'est pas réécrit par Vite : on préfixe la base (GitHub Pages sert sous /<repo>/)
const imageSrc = computed(() => props.image?.startsWith('/') ? import.meta.env.BASE_URL + props.image.slice(1) : props.image)
</script>
<template>
  <div class="slidev-layout gc-dark gc-cover">
    <img v-if="image" class="media" :src="imageSrc" :alt="alt ?? ''" />
    <div>
      <div v-if="eyebrow" class="eyebrow">{{ eyebrow }}</div>
      <slot />
      <div v-if="author" class="author">{{ author }}</div>
    </div>
  </div>
</template>
