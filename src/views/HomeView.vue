<script setup lang="ts">
import { defineAsyncComponent } from "vue"

const HomeComponent = defineAsyncComponent({
  loader: () => import("../components/organism/OrganismHome.vue")
})

</script>

<template>
  <section>
    <KeepAlive>
      <HomeComponent />
    </KeepAlive>
  </section>
</template>
