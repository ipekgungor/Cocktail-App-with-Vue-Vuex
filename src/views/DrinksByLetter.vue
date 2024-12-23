<template>
  <div class="p-8 pb-0">
    <h1 class="text-3xl font-bold mb-4 text-purple-400">Cocktails by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-purple-400 hover:scale-150 transition-all"
      @click.native="refreshWithLetter(letter)"
    >
      {{ letter }}
    </router-link>
  </div>

  <Drinks :drinks="drinks" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import store from "../store";
import Drinks from "../components/Drinks.vue";

const route = useRoute();
const router = useRouter();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const drinks = computed(() => store.state.drinksByLetter);

const refreshWithLetter = (letter) => {
  router.push({ name: "byLetter", params: { letter } }).then(() => {
    window.location.href = `/by-letter/${letter}`;
  });
};

onMounted(() => {
  store.dispatch("searchDrinksByLetter", route.params.letter);
});
</script>
