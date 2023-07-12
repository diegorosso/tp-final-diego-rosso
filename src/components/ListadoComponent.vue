<template>
  <div class="food-cards">
    <div class="food-card" v-for="food in foodList" :key="food.name">
      <img :src="food.img" :alt="food.name" class="food-image" />
      <div class="food-info">
        <h3 class="food-name">{{ food.name }}</h3>
        <p class="food-price">$ {{ food.price }}</p>
        <div class="flex">
          <button class="add-to-cart-button" @click="openModal(food)">
            Ver detalles
          </button>
          <div class="carrito-flex">
            <i
              class="fas fa-shopping-cart cart-icon"
              @click="addToCart(food)"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <InfoComponent
      :selectedFood="selectedFood"
      :showModal="showModal"
      @close-modal="closeModal"
      v-if="selectedFood !== null"
    />
  </div>
</template>

<script>
import InfoComponent from './InfoComponent.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ListadoComponent',
  components: {
    InfoComponent
  },
  computed: {
    ...mapState(['foodList']),
  },
  methods: {
    ...mapActions(['fetchFoodList', 'addToCart']),
    openModal(food) {
      this.selectedFood = food;
      this.showModal = true;
    },
    closeModal() {
      this.selectedFood = null;
      this.showModal = false;
    },
  },
  data() {
    return {
      selectedFood: null,
      showModal: false,
    };
  },
  created() {
    this.fetchFoodList();
  },
};
</script>


<style scoped>
.food-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Mostrar 4 cards por fila */
  gap: 20px; /* Espacio entre las cards */
}

.food-card {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image-container {
  width: 100%;
  height: 150px; /* Establece el tamaño fijo para la imagen */
  overflow: hidden;
  border-radius: 5px;
}

.food-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.food-info {
  margin-top: 10px;
}

.food-name {
  font-size: 18px;
  font-weight: bold;
}

.food-price {
  font-size: 14px;
}

.cart-icon {
  font-size: 20px;
  margin-left: 5px;
  cursor: pointer;
}

.add-to-cart-button {
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
}

.add-to-cart-button:hover {
  background-color: #f98131;
}

.flex {
  display: flex;
  justify-content: center;
}

.carrito-flex {
  display: flex;
  align-items: center;
}
</style>
