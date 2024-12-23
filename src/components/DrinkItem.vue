<template>
  <div
    class="shadow rounded-xl hover:scale-120 transition-all"
  >
    <router-link :to="{ name: 'drinkDetails', params: { id: drink.idDrink } }">
      <img
        :src="drink.strDrinkThumb"
        :alt="drink.strDrink"
        class="w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-2">
      <h3 class="font-medium">{{ drink.strDrink }}</h3>
    </div>
  </div>
</template>

<script setup>
const { drink } = defineProps({
  drink: {
    required: true,
    type: Object
  }
})
</script>
