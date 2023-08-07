<template>
  <div>
    <b-sidebar
      id="sidebar-cart"
      class="sidebar-cart"
      title="Carrito"
      right
      shadow
      :visible="sidebarOpen"
    >
      <div class="cart">
        <h2>
          Carrito de compras
          <i class="fas fa-times" @click="toggleSidebar"></i>
        </h2>

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
                  <i class="fas fa-trash" @click="removeFromCart(index)"></i>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td><strong>Total:</strong></td>
                <td><strong>$ {{ calculateTotal() }}</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CarritoComponents",
  data() {
    return {
      sidebarOpen: false, // Inicialmente el sidebar está cerrado
    };
  },
  computed: {
    ...mapState(["cartItems"]),
  },
  methods: {
    closeCart() {
      this.sidebarOpen = false; // Cierra el sidebar estableciendo la propiedad en false
    },
    ...mapActions(["addToCart", "removeFromCart"]),
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen; // Cambia el valor de la propiedad para abrir/cerrar el sidebar
    },
    calculateTotal() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
    },
  },
};
</script>

<style scoped>
.sidebar-cart {
  position: fixed;
  top: 0;
  right: 0; /* Cambio aquí: izquierda en lugar de derecha */
  height: 100%;
  width: 350px;
  background-color: #f9f9f9;
  padding: 20px;
  border-right: 1px solid #ccc; /* Cambio aquí: borde derecho en lugar de izquierdo */
}
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
  right: 10px;
  cursor: pointer;
  color: #ccc;
}

.close-button i {
  font-size: 14px;
}

.card-close-button {
  position: absolute;
  right: 5px;
  cursor: pointer;
  color: #ccc;
  z-index: 1;
}

.card-close-button i {
  font-size: 12px;
}
</style>
