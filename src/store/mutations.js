export function setSearchedDrinks(state, drinks) {
  state.searchedDrinks = drinks || [];
}
export function setDrinksByLetter(state, drinks) {
  state.drinksByLetter = drinks || [];
}
export function setDrinksByIngredients(state, drinks) {
  state.drinksByIngredient = drinks || [];
}
export function setIngredient(state, ingredient) {
  state.ingredient = ingredient;
}
