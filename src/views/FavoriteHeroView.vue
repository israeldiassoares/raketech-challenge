<template>
    <OrganismFavoriteHero />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue"

const OrganismFavoriteHero = defineAsyncComponent({
    loader: () => import("@/components/organism/OrganismFavoriteHero.vue")
})
</script>