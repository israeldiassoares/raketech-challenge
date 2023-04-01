<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineAsyncComponent, onMounted } from 'vue'

import { useInicialSetup } from './stores/initialSetup'


const store = useInicialSetup()

const SwitchButton = defineAsyncComponent({
  loader: () => import("./components/SwitchButton.vue")
})

onMounted(() => {
  store.retrieveLocalTheme()
});

</script>

<template>
  <header class="grid grid-cols-2 my-4 dark:bg-gray-700 dark:border-gray-600">
    <nav>
      <ul class="grid grid-cols-4">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/add-your-own-hero">Add your own hero</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="flex flex-row justify-end">
      <SwitchButton />
    </div>
  </header>
  <main class="dark:bg-gray-700 dark:border-gray-600">
    <RouterView />
  </main>
  <footer class="bg-green-700 dark:bg-gray-700 dark:border-gray-600">
    Developed by Israel Soares.
  </footer>
</template>
