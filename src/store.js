import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    foodList: [],
    cartItems: [],
  },
  mutations: {
    setFoodList(state, foodList) {
      state.foodList = foodList;
    },
    addToCart(state, food) {
      if (state.cartItems.some((i) => i.name === food.name)) {
        let product = state.cartItems.find((i) => i.name === food.name);
        state.cartItems = state.cartItems.filter((i) => i.name !== food.name);
        product.amount = Number(product.amount) + 1;
        state.cartItems.push(product);
      } else {
        state.cartItems.push({ ...food, amount: 1 });
      }
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);
    },
  },
  actions: {
    fetchFoodList({ commit }) {
      axios
        .get('https://649dd53f9bac4a8e669e60e7.mockapi.io/api/products')
        .then((response) => {
          commit('setFoodList', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addToCart({ commit }, food) {
      commit('addToCart', food);
    },
    removeFromCart({ commit }, index) {
      commit('removeFromCart', index);
    },
  },
});
