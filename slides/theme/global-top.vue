<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
const { currentPage, total, slides, isPrintMode } = useNav()
const pct = computed(() => Math.round((currentPage.value / total.value) * 100))
// La partie est héritée : dernière slide (jusqu'à la courante) qui déclare `part`
const part = computed(() => slides.value
  .slice(0, currentPage.value)
  .map(route => route.meta?.slide?.frontmatter?.part)
  .filter(Boolean)
  .at(-1))
// Les layouts d'annonce sont en sombre : la barre suit
const darkLayouts = ['cover', 'statement', 'section']
const isDark = computed(() => darkLayouts.includes(slides.value[currentPage.value - 1]?.meta?.layout))
// À l'export, une slide `exportClean` sort sans la barre de progression
const isHidden = computed(() => isPrintMode.value && slides.value[currentPage.value - 1]?.meta?.slide?.frontmatter?.exportClean)
</script>
<template>
  <div v-if="!isHidden" class="gc-progress" :class="{ 'gc-dark': isDark }" role="status">
    <div class="track" aria-hidden="true"><div class="fill" :style="{ width: pct + '%' }"></div></div>
    <span>Diapo {{ currentPage }} sur {{ total }}<template v-if="part"> · {{ part }}</template></span>
  </div>
</template>
