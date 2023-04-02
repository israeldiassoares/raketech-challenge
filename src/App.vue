<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineAsyncComponent, onMounted } from 'vue'

import { useInicialSetup } from './stores/initialSetup'


const store = useInicialSetup()

const SwitchButton = defineAsyncComponent({
  loader: () => import("./components/atoms/AtomSwitchButton.vue")
})

onMounted(() => {
  store.retrieveLocalTheme()
});

</script>

<template>
  <header class="grid grid-cols-2 dark:bg-gray-700 dark:border-gray-600">
    <nav>
      <ul class="grid grid-cols-4">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/add-your-own-hero">Add your own hero</RouterLink>
        </li>
        <li>
          <RouterLink to="/favorite-hero"> &#10086; Favorite hero</RouterLink>
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
    <p class="text-sm font-medium text-black dark:text-green-300"> Developed by <a
        href="https://www.linkedin.com/in/israel-soares-016b1738/"
        class="text-green-300"
      >Israel Soares.</a>
    </p>
  </footer>
</template>
