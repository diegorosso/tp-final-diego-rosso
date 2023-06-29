<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">
        <span class="close-icon">x</span>
      </button>
      <img
        :src="selectedFood.img"
        :alt="selectedFood.name"
        class="modal-image"
      />
      <div class="modal-info">
        <h3 class="modal-name">{{ selectedFood.name }}</h3>
        <p class="modal-desc">{{ selectedFood.desc }}</p>
      </div>
      <button @click="addToCart(selectedFood)" class="add-to-cart-button">
        Agregar a mi pedido
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoComponent",
  props: {
    selectedFood: {
      type: Object,
      required: true,
    },
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    addToCart(food) {
      this.$emit("add-to-cart", food); // Emitimos el evento "add-to-cart" al hacer clic en "Agregar al carrito"
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Asegura que el modal esté en frente de la web */
}

.modal-content {
  width: 30%;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.modal-info {
  margin-top: 20px;
  text-align: center;
}

.modal-name {
  font-size: 24px;
  font-weight: bold;
}

.modal-desc {
  font-size: 16px;
}

.close-button {
  margin-top: 20px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
}
.modal-content {
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
}

.close-icon {
  font-size: 16px;
  font-weight: bold;
}

.add-to-cart-button {
  /* Estilos para el botón "Agregar a mi pedido" */
  /* Ajusta estos estilos según tus necesidades */
  margin-top: 20px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
}
</style>
