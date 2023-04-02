<script setup lang="ts">
import { useOwnHeroStore } from '../stores/ownHero'
import router from '@/router'

const store = useOwnHeroStore()
function addFavorite(hero: any) {
    store.addFavorite(hero)
}
defineProps<{
    hero: Object
}>()
</script>
<template>
    <div
        class="bg-green grid grid-cols-2 overflow-hidden max-w-28"
        v-if="hero.length > 0"
        v-for=" heroDetails  in hero"
    >

        <a
            class="my-4"
            v-if="router.options.history.location.includes('/favorite-hero')"
            @click="addFavorite(heroDetails)"
        >
            <picture class="relative grid grid-cols-1 gap-0 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <img
                    class="rounded-lg max-h-48"
                    :src="heroDetails.imageURL"
                    :alt="heroDetails.name"
                >
            </picture>
            <div class="p-2 flex-initial">
                <h3> Hero Name: {{ heroDetails.name }}</h3>
                <p class="flex-row"> <span class="inline-flex p-1.5 rounded-full"> </span>{{ heroDetails.gender }}</p>

            </div>
        </a>
    </div>
</template>