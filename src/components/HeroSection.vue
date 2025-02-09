<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center">
        <!-- Sol Taraf: Metin ve Buton -->
        <div class="col-md-6 text-center text-md-start">
          <h1 class="hero-title">
            Huawei Student Developers ile <br />
            <span class="text-highlight">Sektöre Yakınlaşın</span>, Etkinlikler ve <br />
            İlham Veren Blog Yazılarımız
          </h1>
          <button class="btn btn-dark mt-3">AYRINTILI BİLGİ</button>
        </div>

        <!-- Sağ Taraf: Resim -->
        <div class="col-md-6 text-center">
          <img
              src="@/assets/hsd-group.png"
              alt="Huawei Student Developers"
              class="img-fluid hero-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hero Bölümü Genel Stil */
.hero-section {
  padding: 50px 0; /* Üst ve alt boşluk */
  background-color: white; /* Arka plan beyaz */
}

/* Başlık Stili */
.hero-title {
  font-size: 32px;
  font-weight: bold;
  color: black;
  line-height: 1.3;
}

/* Vurgulu Kırmızı Yazı */
.text-highlight {
  color: red;
}

/* Resim Stili */
.hero-image {
  border-radius: 20px; /* Köşeleri yuvarlat */
  max-width: 100%;
  height: auto;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1); /* Hafif gölge efekti */
}

/* Buton Stili */
.btn-dark {
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
