<template >
    <a
        href="#"
        class="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
        v-for="       character        in getCharacters.results"
        :key="character.id"
    >
        <div class="bg-green grid grid-cols-2 gap-2 overflow-hidden">

            <figure class="relative grid grid-cols-1 gap-0">
                <img
                    class="rounded-lg max-h-48"
                    :src="character.image"
                    alt="rickxpto"
                >
            </figure>
            <div class="p-2 flex-initial">
                <h3> {{ character.name }}</h3>
                <p class="flex-row"> <span class="bg-green-800 inline-flex p-1.5 rounded-full"> </span> {{ character.status }} - {{ character.gender }}</p>
                <div class="flex-row">
                    <p>Last known location:</p>
                    <template
                        v-for="       location        in character"
                        :key="character.id"
                    >
                        <p>{{ location.name }}</p>
                    </template>
                </div>
                <div>
                    <p>First seen in:</p>
                    <p
                        v-for="      origin        in character"
                        :key="character.id"
                    >{{ origin.name }}</p>
                </div>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCharacterStore } from '../stores/character'

const { characters, loading, error, getCharacters } = storeToRefs(useCharacterStore())
const { fetchCharacters } = useCharacterStore()
fetchCharacters()

</script>

<style scoped></style>