<template>
  <footer class="footer fixed-bottom">
    <div class="container py-3">

      <div class="col-md-4 ">
        <img src="hsd-logo.png" alt="HSD Logo" class="mb-2" width="180" />
        <div class="social-icons">
          <a href="https://medium.com/@hsdfiratuniversity" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-medium"></i>
          </a>
          <a href="https://github.com/hsdfirat" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://www.instagram.com/hsdfirat/" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/hsd-firat-university/" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f8e9e9; /* Pembe tonu */
  color: black;
  width: 100%;
}

.footer a {
  text-decoration: none;
  color: black;
}

.footer a:hover {
  text-decoration: underline;
}

.social-icons a {
  color: #000000;
  font-size: 24px;
  margin-left: 15px;
  transition: color 0.3s;
  text-decoration: none;
}

.social-icons a:hover {
  color: red;
}
</style>



<script>
export default {
// eslint-disable-next-line
  name: 'Footer',
  components: {
  },
};
</script>
