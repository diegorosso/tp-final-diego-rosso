<template>
  <div class="sidebar" :class="{ open: isOpen }">
    <div class="close-button" @click="closeCart">
      <i class="fas fa-times"></i>
    </div>
    <div class="cart">
      <h2>Carrito de compras</h2>
      <div v-if="cartItems.length === 0">
        <p>El carrito está vacío.</p>
      </div>
      <div v-else>
        <table class="table cart-table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="index">
              <td>{{ item.name }}</td>
              <td>$ {{ item.price }}</td>
              <td>{{ item.amount }}</td>
              <td>
                <div class="card-close-button" @click="removeFromCart(index)">
                  <i class="fas fa-trash"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

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
      if (this.cartItems.some((i) => i.name === food.name)) {
        let product = this.cartItems.find((i) => i.name === food.name);
        this.cartItems = this.cartItems.filter((i) => i.name !== food.name);
        product.amount = Number(product.amount) + 1;
        this.cartItems.push(product);
      } else {
        this.cartItems.push({ ...food, amount: 1 });
      }

      let carrito = {
        userId: "sdflk4576",
        createdDate: new Date(),
        products: this.cartItems,
        total: this.getTotal(this.cartItems)
      }

      // Realizar la solicitud POST para crear el carrito
      axios
        .post("https://649de6aa9bac4a8e669e70b3.mockapi.io/api/carrito", carrito)
        .then(() => {
            alert("Carrito agregado!")
        })
        .catch((error) => {
          alert("Error al agregar el carrito");
          console.error(error);
        });
      this.isOpen = true; // Mostrar el carrito al agregar un elemento
    },
    getTotal(products){
      let total = 0;
      for (let product of products){
        total += Number(product.price) * Number(product.amount)
      }
      return total
    },
    removeFromCart(index) {
      // Elimina la declaración de 'item' aquí

      // Actualiza la lógica de eliminación
      this.cartItems.splice(index, 1);

      if (this.cartItems.length === 0) {
        this.isOpen = false; // Ocultar el carrito cuando no haya elementos
      }
    },
    closeCart() {
      this.isOpen = false;
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

.cart-table {
  width: 100%;
}

.cart-table th,
.cart-table td {
  padding: 10px;
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
