<template>
  <section class="hero d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <!-- Sol taraf: Metin -->
        <div class="col-md-5 text-center text-md-start position-relative">
          <div class="text-background"></div>
          <h2 class="hero-title">Huawei Student Developers ile Sektöre Yakınlaşın, Etkinlikler ve İlham Veren Blog Yazılarımız</h2>
          <a href="#" class="btn btn-primary mt-3">Ayrıntılı Bilgi</a>
        </div>
        <!-- Sağ taraf: Görsel -->
        <div class="col-md-6 text-center text-md-end">
          <img src="@/assets/hsd-group.png" alt="HSD Group" class="hero-image">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cormorant+SC:wght@300;400;500;600;700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Italianno&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');


.hero {
  padding: 100px 0;
  text-align: center;
  position: relative;
}

.btn-primary {
  background-color: #000000;
  border-color: #000000;
  padding: 12px 24px;
  font-size: 1.1rem;
  border-radius: 8px;
  transition: 0.3s ease;
}
.btn-primary:hover {
  background-color: #ff0000;
  border-color: #ff0000;
}

.text-background {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 90%;
  background: url('@/assets/lines.png') no-repeat center center;
  background-size: contain;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  z-index: -1;
}
.hero-title {
  font-family: "Cormorant SC", serif;
  font-style: normal;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  line-height: 1.4;
  position: relative;
  z-index: 2;
}
.hero-image {
  max-width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 40px;
  transition: 0.3s ease;
}
.hero-image:hover {
  border-radius: 40px;
  transform: scale(1.05);
}
</style>
