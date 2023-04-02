<template>
    <section v-if="store.getHeroFavorite.length > 0">
        <HeroCard :hero="store.getHeroFavorite" />
    </section>
</template>

<script setup lang="ts">
import { useOwnHeroStore } from '../stores/ownHero'
import { defineAsyncComponent } from "vue"

const HeroCard = defineAsyncComponent({
    loader: () => import("../components/molecules/HeroCard.vue")
})

const store = useOwnHeroStore()


</script>