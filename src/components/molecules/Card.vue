//TODO Card receive props from component superior to become reusable
<template >
    <template
        v-for="  character   in store.getCharacters"
        :key="character.id"
    >
        <a @click="cardSelected(character.id)">
            <div class="bg-green grid grid-cols-3 gap-2 overflow-hidden max-w-44">
                <picture class="relative grid grid-cols-1 gap-0 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <img
                        class="rounded-lg max-h-48"
                        :src="character.image"
                        :alt="character.name"
                    >
                </picture>
                <div class="p-2 flex-initial col-span-2">
                    <h3> {{ character.name }}</h3>
                    <p class="flex-row"> <span
                            class="inline-flex p-1.5 rounded-full"
                            :class="statusColor(character.status)"
                        > </span> {{ character.status }} - {{ character.gender }}</p>
                    <div class="flex-row">
                        <p>Last known location:</p>
                        <template
                            v-for="  location   in character.location"
                            :key="character.location"
                        >
                            <p>{{ location }}</p>
                        </template>
                    </div>
                    <div>
                        <p>First seen in:</p>
                        <template v-for="  origin   in character.origin">
                            <p>{{ origin }}</p>
                        </template>
                    </div>
                </div>
            </div>
        </a>
    </template>
</template>

<script setup lang="ts">
import router from '@/router'
import { useCharacterStore } from '../../stores/character'
const store = useCharacterStore()
store.getAllOrFiltredResult()

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
</script>
