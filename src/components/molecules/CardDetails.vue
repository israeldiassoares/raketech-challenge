<template >
    <div
        v-if="store.getCharacterDetails"
        class="grid grid-cols-3 rounded-3xl overflow-hidden"
    >
        <picture>
            <img
                :src="(store.getCharacterDetails.image)"
                :alt="'profile image ' + store.getCharacterDetails.name"
            >
        </picture>
        <ul class="col-span-2">

            <h1 class="text-green-500"> {{ store.getCharacterDetails.name }}</h1>
            <li class="flex">
                <p class="text-green-500">Status:</p>
                <p class="text-green-500">{{ store.getCharacterDetails.status }}</p>
            </li>
            <li class="flex">
                <p class="text-green-500">Type:</p>
                <p class="text-green-500">{{ store.getCharacterDetails.type }}</p>
            </li>
            <li>
                <p class="text-green-500">Episodes:</p>
                <template v-for=" episode  in store.getCharacterDetails.episode">
                    <p class="text-green-500">{{ episode }} </p>
                </template>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from "../../stores/character"

const store = useCharacterStore()


</script>
