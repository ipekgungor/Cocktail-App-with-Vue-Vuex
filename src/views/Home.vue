<template>
  <div class="p-8 pb-0 text-purple-400">
    <h1 class="text-3xl font-bold mb-5">Random Cocktails</h1>
  </div>
  <Drinks :drinks="drinks" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import Drinks from "../components/Drinks.vue";
import axiosClient from "../axiosClient.js";

const drinks = ref([]);

onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => drinks.value.push(data.drinks[0]));
  }
});
</script>
