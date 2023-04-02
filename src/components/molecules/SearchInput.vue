
<script setup lang="ts">
import { ref } from 'vue'
import { useCharacterStore } from '../../stores/character'
const store = useCharacterStore()

let text = ref<string>('')
function setSearchText() {
    store.setTextSearch(text.value)
}
function getFilteredCharacter() {
    store.getFilteredCharacter()
}
//executa a action para pegar os itens filtrado
</script>

<template>
    <form>
        <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label>
        <div class="relative">
            <input
                @change="setSearchText()"
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-green-300 rounded-lg bg-green-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Name, status, species, type or Gender"
                v-model="text"
            >
            <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                @click.prevent="getFilteredCharacter()"
            >Search</button>
        </div>
    </form>
</template>