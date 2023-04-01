<template>
    <div class="my-4">
        <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Filter for</h3>
        <ul class="flex justify-between">
            <li>
                <input
                    type="radio"
                    id="filter-by-name"
                    name="hosting"
                    value="name"
                    class="hidden peer"
                    required
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
                    name="hosting"
                    value="status"
                    class="hidden peer"
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
                    name="hosting"
                    value="species"
                    class="hidden peer"
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
                    name="hosting"
                    value="type"
                    class="hidden peer"
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
                    name="hosting"
                    value="gender"
                    class="hidden peer"
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
            <button @click="selectedParams($el)">
                <li>
                    <input
                        type="radio"
                        id="filter-by-all"
                        name="hosting"
                        value="all"
                        class="hidden peer"
                        @click="selectedParams($el)"
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
            </button>
        </ul>

    </div>
</template>

<script setup lang="ts">
import { useSelectSearchQuery } from '../stores/selectSearch'
const { selectedParams } = useSelectSearchQuery()
</script>

<style scoped></style>