<template>
    <div class="py-4">
        <h3 class="mb-2 font-semibold text-gray-900 dark:text-white">Filter by</h3>
        <ul
            class="lg:flex lg:justify-between md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 grid grid-cols-2"
            @change="setSelectedParam()"
        >
            <li>
                <input
                    type="radio"
                    id="filter-by-name"
                    value="name"
                    class="hidden peer"
                    v-model="picked"
                >
                <label
                    for="filter-by-name"
                    class="inline-flex justify-center w-44 p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Name</div>
                    </div>
                </label>
            </li>
            <li>
                <input
                    type="radio"
                    id="filter-by-status"
                    value="status"
                    class="hidden peer"
                    v-model="picked"
                >
                <label
                    for="filter-by-status"
                    class="inline-flex justify-center w-44 p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Status, is Alive ?</div>
                    </div>
                </label>
            </li>
            <li>
                <input
                    type="radio"
                    id="filter-by-species"
                    value="species"
                    class="hidden peer"
                    v-model="picked"
                >
                <label
                    for="filter-by-species"
                    class="inline-flex justify-center w-44 p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Species</div>
                    </div>

                </label>
            </li>
            <li>
                <input
                    type="radio"
                    id="filter-by-type"
                    value="type"
                    class="hidden peer"
                    v-model="picked"
                >
                <label
                    for="filter-by-type"
                    class="inline-flex justify-center w-44 p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Type</div>
                    </div>
                </label>
            </li>
            <li>
                <input
                    type="radio"
                    id="filter-by-gender"
                    value="gender"
                    class="hidden peer"
                    v-model="picked"
                >
                <label
                    for="filter-by-gender"
                    class="inline-flex justify-center w-44 p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div class="block">
                        <div class="w-full text-lg font-semibold">Gender</div>
                    </div>
                </label>
            </li>
            <li>
                <input
                    type="radio"
                    id="filter-by-all"
                    value="all"
                    class="hidden peer"
                    v-model="picked"
                >
                <label
                    for="filter-by-all"
                    class="inline-flex justify-center w-44 p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div class="block">
                        <div class="w-full text-lg font-semibold">All</div>
                    </div>
                </label>
            </li>
        </ul>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCharacterStore } from '../../stores/character'
const store = useCharacterStore()

const picked = ref<string>('')

//Emitir para o estado por qual item vai ser pesquisado
function setSelectedParam() {
    store.setSelectedParam(picked.value)
}
</script>
