<script setup lang="ts">
import { defineAsyncComponent } from "vue"
import { useCharacterStore } from '@/stores/character'
let store = useCharacterStore()
store.getAllOrFiltredResult()

const HomeComponent = defineAsyncComponent({
  loader: () => import("../components/organism/OrganismHome.vue")
})

</script>

<template>
  <section>
    <HomeComponent />
  </section>
</template>
