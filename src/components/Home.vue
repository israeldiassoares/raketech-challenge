<template>
    <div class="flex-col justify-between">
        <header>
            <SelectSearchOption />
            <SearchInput />
        </header>
        <section class="grid grid-cols-2 md:grid-cols-2 gap-4 py-4">
            <slot name="main"> Loading Characters</slot>
        </section>
        <footer class="my-4">
            <Pagination />
        </footer>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Pagination = defineAsyncComponent({
    loader: () => import("../components/Pagination.vue")
})
const SelectSearchOption = defineAsyncComponent({
    loader: () => import("../components/RadioButton.vue")
})
const SearchInput = defineAsyncComponent({
    loader: () => import("../components/SearchInput.vue")
})
</script>
