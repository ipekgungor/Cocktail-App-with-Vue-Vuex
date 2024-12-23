import axiosClient from "../axiosClient";

export function searchDrinks({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedDrinks", data.drinks);
  });
}

export function searchDrinksByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setDrinksByLetter", data.drinks);
  });
}

export function searchDrinksByIngredient({ commit }, ingredient) {
  axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    commit("setDrinksByIngredients", data.drinks);
  });
}
