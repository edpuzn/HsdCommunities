<template>
  <div class="container">
    <swiper
        :modules="[Autoplay, Navigation]"
        :slides-per-view="1"
        :breakpoints="{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
        :space-between="30"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        navigation
        class="mySwiper"
    >
      <swiper-slide v-for="(blog, index) in blogs" :key="index">
        <div class="card blog-card">
          <img v-if="blog.image" :src="blog.image" class="card-img-top" alt="Blog Image" />
          <div class="card-body">
            <h5 class="card-title">{{ blog.title }}</h5>
            <hr class="divider" />
            <p class="author">{{ blog.author }}</p>
            <hr class="divider" />
            <p class="card-text">{{ blog.description }}</p>
            <p class="tags">
              <span v-for="(tag, i) in blog.tags" :key="i" class="badge badge-danger">
                {{ tag }}
              </span>
            </p>
            <button class="btn btn-dark">READ MORE</button>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Sol ve sağ butonlar -->
    <div class="swiper-custom-prev" @click="prevSlide">
      <span>&#8249;</span>
    </div>
    <div class="swiper-custom-next" @click="nextSlide">
      <span>&#8250;</span>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default {
  // eslint-disable-next-line
  name: "Blogs",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      blogs: [
        {
          image: require("@/assets/logo.png"),
          title: "Bulut Teknolojisi ve Ekosistemimize Katkıları: Huawei Cloud",
          author: "HSD Fırat",
          description: "Dijital dönüşüm, 21. yüzyılın en önemli dinamiklerinden biri haline geldi. Bulut teknolojisi...",
          tags: ["Huawei", "AI", "Chips", "Hardware"],
        },
        {
          image: require("@/assets/logo.png"),
          title: "Yapay Zeka İçin Güçlü Ve Verimli Çözümler: Huawei Ascend",
          author: "HSD Fırat",
          description: "Yapay zeka, günümüzün en dönüştürücü teknolojilerinden biri olarak hayatımızın her alanına...",
          tags: ["Huawei", "AI", "Chips", "Hardware"],
        },
        {
          image: require("@/assets/logo.png"),
          title: "Yapay Zeka İçin Güçlü Ve Verimli Çözümler: Huawei Ascend",
          author: "HSD Fırat",
          description: "Huawei'nin geliştirdiği Ascend çipleri, bu ihtiyacı karşılamak üzere tasarlanmış...",
          tags: ["Huawei", "AI", "Chips", "Hardware"],
        },
        {
          image: require("@/assets/logo.png"),
          title: "Yapay Zeka İçin Güçlü Ve Verimli Çözümler: Huawei Ascend",
          author: "HSD Fırat",
          description: "Huawei'nin geliştirdiği Ascend çipleri, bu ihtiyacı karşılamak üzere tasarlanmış...",
          tags: ["Huawei", "AI", "Chips", "Hardware"],
        },
      ],
      Autoplay,
      Navigation,
    };
  },
  methods: {
    prevSlide() {
      document.querySelector(".swiper").swiper.slidePrev();
    },
    nextSlide() {
      document.querySelector(".swiper").swiper.slideNext();
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  position: relative;
}

.blog-card {
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  padding: 15px;
  border: 1px solid #ccc; /* Gri border */
}

.blog-card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-body {
  text-align: center;
}

.card-title {
  font-weight: bold;
}

.author {
  color: red;
  font-weight: bold;
}

.tags {
  margin-top: 10px;
}

.badge {
  margin-right: 5px;
  background-color: red;
  color: white;
}

.btn-dark {
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: bold;
}

/* HSD Fırat için alt ve üst çizgi */
.divider {
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
}

/* Sol ve sağ navigation butonları */
.swiper-custom-prev,
.swiper-custom-next {
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
}

.swiper-custom-prev {
  left: -30px;
}

.swiper-custom-next {
  right: -30px;
}

.swiper-custom-prev span,
.swiper-custom-next span {
  font-size: 24px;
  color: red;
  font-weight: bold;
}

/* Swiper'ın varsayılan mavi butonlarını kaldır */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none !important;
}
</style>
