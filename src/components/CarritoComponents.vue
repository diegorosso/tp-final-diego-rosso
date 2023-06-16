<template>
  <div class="sidebar" :class="{ open:  isOpen }">
    <div class="close-button" @click="toggleCart">
      <i class="fas fa-times"></i>
    </div>
    <div class="cart">
      <h2>Carrito de compras</h2>
      <div v-if="cartItems.length === 0">
        <p>El carrito está vacío.</p>
      </div>
      <div v-else>
        <div
          class="food-card close-button"
          v-for="(item, index) in cartItems"
          :key="index"
        >
          <div class="card-close-button" @click="removeFromCart(index)">
            <i class="fas fa-times"></i>
          </div>
          <img :src="item.img" :alt="item.name" class="food-image" />
          <div class="food-info">
            <h3 class="food-name">{{ item.name }}</h3>
            <p class="food-price">$ {{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarritoComponents",
  data() {
    return {
      isOpen: false,
      cartItems: [],
    };
  },
  methods: {
    addToCart(food) {
      this.cartItems.push(food);
      this.isOpen = true; // Mostrar el carrito al agregar un elemento
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
      if (this.cartItems.length === 0) {
        this.isOpen = false; // Ocultar el carrito cuando no haya elementos
      }
    },
    closeCart() {
      this.cartItems = [];
    },
    toggleCart() {
      this.isOpen = !this.isOpen; // Alternar la visibilidad del carrito al hacer clic en el icono de cierre
    },
  },
  created() {
    this.$root.$on("add-to-cart", this.addToCart);
  },
  beforeDestroy() {
    this.$root.$off("add-to-cart", this.addToCart);
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  background-color: #f9f9f9;
  padding: 20px;
  border-left: 1px solid #ccc;
}

.cart {
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h2 {
  margin-top: 0;
}

.food-card {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.food-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.food-info {
  text-align: center;
}

.food-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.food-price {
  font-size: 14px;
  margin-bottom: 5px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #ccc;
}

.close-button i {
  font-size: 14px;
}

.card-close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: #ccc;
  z-index: 1;
}

.card-close-button i {
  font-size: 12px;
}
</style>