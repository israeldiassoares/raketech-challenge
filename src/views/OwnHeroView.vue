<template>
    <OrganismAddYourOwnHero />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue"

const OrganismAddYourOwnHero = defineAsyncComponent({
    loader: () => import("../components/organism/OrganismAddYourOwnHero.vue")
})

</script>
