<template>
    <section
        class="grid grid-cols-3 gap-2"
        v-if="store.getFavoriteHeroList.length"
    >
        <CardFavoriteHero :hero-list="store.getFavoriteHeroList" />
    </section>
    <section
        v-else
        class="flex justify-center"
    >
        <h3> There's not here as favorite &lt;/3, back Home and choose someones </h3>
    </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onUpdated } from 'vue'
import { useCharacterStore } from '@/stores/character'


const CardFavoriteHero = defineAsyncComponent({
    loader: () => import("@/components/molecules/Card.vue")
})

const store = useCharacterStore()
onUpdated(() => {
    store.setFavHeroFromCache()
})
store.getFavHeroFromCache()

</script>
