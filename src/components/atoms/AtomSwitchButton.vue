<template>
    <div>
        <label class="relative inline-flex items-center cursor-pointer">
            <span class="mr-3 text-sm font-medium text-green-900 dark:text-green-300">Light</span>
            <input
                type="checkbox"
                value=""
                class="sr-only peer"
                :checked="(store.getCurrentTheme == 'light')"
                @click="store.toggleTheme()"
            >
            <div
                class="w-11 h-6 bg-green-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-green-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-green-600 peer-checked:bg-green-600">
            </div>
            <span class="ml-3 text-sm font-medium text-green-900 dark:text-green-300">Dark</span>
        </label>
    </div>
</template>

<script setup lang="ts">
import { useInicialSetup } from '../../stores/initialSetup'
const store = useInicialSetup()

</script>
