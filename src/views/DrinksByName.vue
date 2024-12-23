<template>
  <div class="p-8 pb-0">
    <h1 class="text-3xl font-bold mb-4 text-purple-400">Search Cocktails by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-purple-400 focus:border-purple-400 w-full"
      placeholder="Search for Cocktails"
      @change="searchDrinks"
    />
  </div>

  <Drinks :drinks="drinks" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Drinks from '../components/Drinks.vue'

const route = useRoute();
const keyword = ref("");
const drinks = computed(() => store.state.searchedDrinks);

function searchDrinks() {
  if (keyword.value) {
    store.dispatch("searchDrinks", keyword.value);
  } else {
    store.commit("setSearchedDrinks", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchDrinks()
  }
})
</script>
