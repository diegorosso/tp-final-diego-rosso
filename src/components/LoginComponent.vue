<template>
  <div
    class="modal-overlay"
    v-if="showLoginForm || showRegistrationForm"
    @click="closeModal($event)"
  >
    <div class="modal-container" v-if="showLoginForm || showRegistrationForm">
      <button class="modal-close-btn" @click="closeModal">×</button>
      <div class="login-form">
        <h2>Iniciar sesión</h2>
        <form v-if="showLoginForm" @submit="loginFormSubmit">
          <div class="form-group">
            <label for="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Iniciar sesión</button>
        </form>

        <p v-if="!showRegistrationForm">
          ¿Aún no estás registrado?
          <a href="#" @click="toggleRegistrationForm">Regístrate aquí.</a>
        </p>

        <form v-if="showRegistrationForm" @submit="register">
          <div class="form-group">
            <label for="firstName">Nombre</label>
            <input
              type="text"
              id="firstName"
              v-model="firstName"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="lastName">Apellido</label>
            <input
              type="text"
              id="lastName"
              v-model="lastName"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="newUsername">Nombre de usuario</label>
            <input
              type="text"
              id="newUsername"
              v-model="newUsername"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="newPassword">Contraseña</label>
            <input
              type="password"
              id="newPassword"
              v-model="newPassword"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Registrarse</button>
        </form>

        <p v-if="showRegistrationForm">
          ¿Ya tenés una cuenta?
          <a href="#" @click="toggleLoginForm">Ingresá aquí.</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      showLoginForm: true,
      showRegistrationForm: false,
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      newUsername: "",
      newPassword: "",
    };
  },
  methods: {
    loginFormSubmit() {
      // lógica de inicio de sesión
    },
    register(event) {
      event.preventDefault();
      // lógica de registro de usuario
      alert("Registro exitoso");
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.newUsername = "";
      this.newPassword = "";
    },
    toggleRegistrationForm() {
      this.showLoginForm = false;
      this.showRegistrationForm = true;
    },
    toggleLoginForm() {
      this.showLoginForm = true;
      this.showRegistrationForm = false;
    },
    closeModal(event) {
      if (event.target.classList.contains("modal-close-btn")) {
        this.showLoginForm = false;
        this.showRegistrationForm = false;
      }
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
  z-index: 999;
}

.modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  z-index: 1000;
  border-radius: 4px;
}

.login-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #ff6600;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #f98131;
}
.modal-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: transparent;
}
</style>
