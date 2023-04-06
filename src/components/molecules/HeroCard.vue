<script setup lang="ts">
import { useOwnHeroStore, type Hero } from '../../stores/ownHero'
import router from '@/router'

const store = useOwnHeroStore()

function ifExisteFavorite(hero: any) {
    store.checkIfExistHero(hero)
}
const currentRouter = router.options.history.location
defineProps<{
    hero: Hero[]
}>()
</script>
<template>
    <div
        class="bg-green overflow-hidden max-w-28"
        v-for="heroDetails  in hero"
    >

        <picture class="relative grid grid-cols-1 gap-0 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
                class="rounded-lg max-h-48"
                :src="heroDetails.imageURL"
                :alt="heroDetails.name"
            >
        </picture>
        <div>
            <div class="p-2 flex">
                <h3> Hero Name: </h3>
                <p> {{ heroDetails.name }}</p>
            </div>
            <div class="p-2 flex">
                <h3>Gender: </h3>
                <p class="flex-row"> {{ heroDetails.gender }}</p>
            </div>
        </div>
    </div>
</template>