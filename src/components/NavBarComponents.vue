<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <div class="navbar-brand">
          <h2 class="padding-h2">Vue Food Orders</h2>
        </div>
        <div class="d-flex ml-auto">
          <ul class="navbar-nav flex-column ul-flex">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="toggleLoginForm">
                <i class="fas fa-user mr-3 padding-1"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="toggleCarritoForm">
                <i class="fas fa-shopping-cart mr-3 padding-1"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <LoginComponent v-if="showLoginForm" @close="closeLoginForm" />
      <div>
        <CarritoComponents
          v-if="showCarritoForm"
          @close="closeCarritoForm"
          ref="cart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LoginComponent from "./LoginComponent.vue";
import CarritoComponents from "./CarritoComponents.vue";

export default {
  name: "NavBarComponents",
  components: {
    LoginComponent,
    CarritoComponents,
  },
  data() {
    return {
      showLoginForm: false,
      showCarritoForm: false,
    };
  },
  methods: {
    toggleCarritoForm() {
      console.log("Se hizo clic en el icono del carrito");
      this.showCarritoForm = !this.showCarritoForm;
    },
    toggleLoginForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    closeLoginForm() {
      this.showLoginForm = false;
    },
    closeCarritoForm() {
      console.log("Evento close enviado desde NavBarComponents al CarritoComponents");
      this.$refs.cart.toggleCart(); // Llamar al método toggleCart del componente CarritoComponent para ocultar el sidebar
    },
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.navbar {
  background-color: #343a40;
  height: 80px;
  padding: 0 1rem; /* Añade algo de espacio horizontal */
}

.navbar-brand {
  font-weight: bold;
  color: #fff;
  font-size: 1.5rem; /* Ajusta el tamaño de la tipografía para el título */
}

.navbar-nav .nav-link {
  color: #fff;
  font-size: 1.2rem; /* Ajusta el tamaño de la tipografía para los enlaces */
}

.navbar-nav .nav-link:hover {
  color: #ff6600;
}

.navbar-nav .nav-item i {
  font-size: 1.6rem;
  vertical-align: middle; /* Alinea el icono con el texto del enlace */
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.ul-flex {
  display: flex;
  align-items: center; /* Alinea los elementos de la lista verticalmente */
}

.padding-h2 {
  margin-bottom: 0; /* Elimina el espacio adicional debajo del título */
}

.padding-1 {
  padding: 1rem;
}
ul li {
  list-style: none;
  margin-right: 1rem; /* Añade algo de espacio a la derecha de cada elemento de la lista */
}
</style>