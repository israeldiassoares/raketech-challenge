<script setup lang="ts">
import { defineAsyncComponent } from "vue"
const HomeComponent = defineAsyncComponent({
  loader: () => import("../components/Home.vue")
})
const CardComponent = defineAsyncComponent({ loader: () => import("../components/Card.vue") })
const CardDetails = defineAsyncComponent({ loader: () => import("../components/CardDetails.vue") })
</script>

<template>
  <section>
    <HomeComponent>
      <template v-slot:main>
        <CardComponent />
      </template>
    </HomeComponent>
  </section>
</template>
