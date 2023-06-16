<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h2 class="font-sinze">{{ fullName }}</h2>
        </div>
        <div class="footer-links">
          <a href="#top" class="scroll-top hoverScroll" @click="scrollToTop">
            <i class="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      fullName: " © 2023 Diego Rosso, Inc",
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #191817;
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-logo {
  font-weight: bold;
  font-size: 20px;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.footer-links a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
}

.scroll-top {
  font-size: 24px;
  color: #333;
  text-decoration: none;
}
.font-sinze {
  font-size: 1rem;
  color: white;
}
.hoverScroll:hover{
  color: #ff6600
}
</style>
