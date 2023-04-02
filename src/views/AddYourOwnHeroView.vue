<script setup lang="ts">
import { defineAsyncComponent } from "vue"
import { useOwnHeroStore } from '../stores/ownHero'
const store = useOwnHeroStore()


const HeroForm = defineAsyncComponent({
  loader: () => import("../components/HeroForm.vue")
})

const HeroCard = defineAsyncComponent({
  loader: () => import("../components/HeroCard.vue")
})

</script>
<template>
  <section class="my-4">
    <HeroForm />
  </section>
  <section class="my-4 grid grid-cols-2 max-w-md">
    <HeroCard :hero="store.getListHero" />
  </section>
</template>
