<script setup lang="ts">
import { useOwnHeroStore } from '../../stores/ownHero'
import router from '@/router'

const store = useOwnHeroStore()
function addFavorite(hero: any) {
    store.saveStateFavoriteHero(hero)
}
defineProps<{
    hero: Object
}>()
</script>
<template>
    <div
        class="bg-green overflow-hidden max-w-28"
        v-for=" heroDetails  in store.getListHero"
    >

        <a
            class="py-4 grid grid-cols-2"
            v-if="!router.options.history.location.includes('/favorite-hero')"
            @click="addFavorite(heroDetails)"
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
        </a>
    </div>
</template>