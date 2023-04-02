<template>
    <div class="flex-col justify-between">
        <header>
            <SelectSearchOption />
            <SearchInput />
        </header>
        <section class="grid grid-cols-2 md:grid-cols-2 gap-4 py-4">
            <CardComponent />
        </section>
        <footer class="py-4">
            <Pagination />
        </footer>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Pagination = defineAsyncComponent({
    loader: () => import("../molecules/Pagination.vue")
})
const SelectSearchOption = defineAsyncComponent({
    loader: () => import("../molecules/RadioButton.vue")
})
const SearchInput = defineAsyncComponent({
    loader: () => import("../molecules/SearchInput.vue")
})
const CardComponent = defineAsyncComponent({ loader: () => import("../molecules/Card.vue") })

</script>
