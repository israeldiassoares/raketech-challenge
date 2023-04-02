<script setup lang="ts">
import { defineAsyncComponent } from "vue"
import { useOwnHeroStore } from '../../stores/ownHero'
const store = useOwnHeroStore()


const HeroForm = defineAsyncComponent({
  loader: () => import("../molecules/HeroForm.vue")
})

const HeroCard = defineAsyncComponent({
  loader: () => import("../molecules/HeroCard.vue")
})

</script>
<template>
  <section class="py-4">
    <HeroForm />
  </section>
  <section class="py-4 grid grid-cols-2 max-w-md">
    <HeroCard :hero="store.getListHero" />
  </section>
</template>
