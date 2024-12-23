<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-4 text-purple-400 font-bold"
    >
      Home
    </router-link>
    <div class="flex items-center">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-3 h-full transition-colors hover:bg-purple-400 hover:text-white"
      >
        Search Cocktails
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-3 h-full transition-colors hover:bg-purple-400 hover:text-white"
      >
        Cocktails By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-3 h-full transition-colors hover:bg-purple-400 hover:text-white"
      >
        Cocktails By Ingredients
      </router-link>
    </div>
  </header>
</template>
