<template>
  <div class="contact-page">
    <div class="qr-code-container">
      <img src="@/assets/QrCode.png" alt="QR Code" class="qr-code-image">
    </div>
    <div class="right-side">
      <img src="@/assets/hsd-logo.png" alt="HSD Logo" class="hsd-logo" />
      <div class="col-md-4 d-flex flex-column align-items-center justify-content-center">
        <h2 class="university-title">Fırat Üniversitesi</h2>
      </div>

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
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  name: 'Contact',
  components: {
    Footer
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cormorant+SC:wght@300;400;500;600;700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Italianno&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');


.university-title {
  font-family: "Italianno", serif;
  font-style: normal;
  color: #000000;
  font-weight: bold;
  font-size: 3.5rem;
}

.contact-page {
  display: flex;
  justify-content: space-between; /* Sol ve sağ içeriği yan yana yerleştir */
  align-items: center; /* Dikeyde ortala */
  padding: 20px;
  height: 80vh; /* Sayfanın %80'ini kapla */
}

.qr-code-container {
  flex: 1; /* Sol tarafın genişliği */
  display: flex;
  justify-content: center; /* Yatayda ortala */
  align-items: center; /* Dikeyde ortala */
}

.qr-code-image {
  max-width: 100%; /* Resmin genişliği container'ı aşmasın */
  max-height: 100%; /* Resmin yüksekliği container'ı aşmasın */
  border-radius: 10px; /* Köşeleri yuvarlak yap */
}

.right-side {
  flex: 1; /* Sağ tarafın genişliği */
  display: flex;
  flex-direction: column;
  align-items: center; /* İçeriği ortala */
  animation: slideInRight 1s ease-in-out; /* Giriş efekti */
}

.hsd-logo {
  width: 350px; /* Logo genişliği */
  margin-bottom: 20px; /* Logo ile ikonlar arası boşluk */
}

.social-icons {
  display: flex;
  gap: 1rem; /* İkonlar arası boşluk */
}

.social-icons a {
  color: #333; /* İkon rengi */
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #0077b5; /* Hover rengi */
}

/* Giriş efekti animasyonu */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>