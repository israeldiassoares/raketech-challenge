<template>
    <div>
        <label class="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                class="sr-only peer"
                checked
                @click="store.toggleTheme()"
            >
            <div
                class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-black-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black-600">
            </div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Light</span>
        </label>
    </div>
</template>

<script setup lang="ts">
import { useInicialSetup } from '../stores/initialSetup'
const store = useInicialSetup()

</script>
