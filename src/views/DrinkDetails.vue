<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-3xl font-bold mb-5 text-purple-400">{{ drink.strDrink }}</h1>
    <img :src="drink.strDrinkThumb" :alt="drink.strDrink" class="max-w-[100%]">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ drink.strCategory }}
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="drink[`strIngredient${ind + 1}`]">
            {{ ind + 1 }}. {{ drink[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="drink[`strMeasure${ind + 1}`]">
              {{ drink[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const route = useRoute();
const drink = ref({})

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      drink.value = data.drinks[0] || {}
    })
})
</script>