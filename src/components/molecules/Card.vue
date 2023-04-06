//TODO Card receive props from component superior to become reusable
<template>
    <template
        v-for="                 character                  in heroList"
        :key="character.id"
    >
        <div class="bg-green grid grid-cols-2 overflow-hidden max-w-44 border-2 border-green-700 dark:border-green-500 rounded-lg overflow-hide ">
            <a
                @click="cardSelected(character.id)"
                class="flex col-span-2 cursor-pointer"
            >
                <picture class="relative transition-all duration-300 filter grayscale hover:grayscale-0">
                    <img
                        class="rounded-lg max-h-48"
                        :src="character.image"
                        :alt="character.name"
                    >
                </picture>
                <div class="p-2">
                    <h4 class="text-xl"> {{ character.name }}</h4>
                    <p class="flex-row"> <span
                            class="inline-flex p-1.5 rounded-full"
                            :class="statusColor(character.status)"
                        > </span> {{ character.status }} - {{ character.gender }}</p>
                    <div class="flex-row">
                        <p>Last known location:</p>
                        <p>{{ character.location.name }}</p>
                    </div>
                    <div>
                        <p>First seen in:</p>
                        <p>{{ character.origin.name }}</p>
                    </div>
                </div>
            </a>
            <ButtonFavorite
                @click="addFavorite(character)"
                class="flex justify-center align-center col-span-2 py-2 w-full bg-green-100 dark:bg-green-200 hover:bg-green-300 hover:dark:bg-green-500"
            >
                <template v-slot:icon>
                    <FavoriteIcon class="w-5 h-5" />
                </template>
            </ButtonFavorite>
        </div>

    </template>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import router from '@/router'
import { useCharacterStore, type Hero } from '@/stores/character'

const ButtonFavorite = defineAsyncComponent({
    loader: () => import('@/components/atoms/AtomButton.vue')
})
const FavoriteIcon = defineAsyncComponent({
    loader: () => import('@/components/atoms/AtomFavIcon.vue')
})

const store = useCharacterStore()

const statusColor = function statusColor(status: string): string {
    const values = <string | any>{
        "alive": "bg-green-500",
        "dead": "bg-red-500",
        "unknown": "bg-gray-400"
    }
    return values[ status.toLocaleLowerCase() ]
}
function cardSelected(id: any) {
    store.fetchCharacterById(id)
    router.push({ path: `/character/${id}` })
}
function addFavorite(hero: Hero) {
    store.favoriteActions(hero)
}
defineProps<{
    heroList: Hero[]
}>()
</script>
