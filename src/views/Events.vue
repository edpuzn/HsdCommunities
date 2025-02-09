<template>
  <div class="timeline-wrapper">
    <div class="swiper-container">
      <swiper
          :slides-per-view="3"
          :space-between="30"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :loop="true"
          ref="swiper"
          class="fade-effect"
      >
        <swiper-slide
            v-for="(event, index) in events"
            :key="index"
            class="timeline-item"
            :class="index % 2 === 0 ? 'top' : 'bottom'"
        >
          <router-link
              :to="{ name: 'EventDetail', params: { id: index } }"
              class="event-link"
          >
            <div class="event-card fade-in">
              <img
                  :src="require(`@/assets/event${index + 1}.png`)"
                  alt="Event Image"
                  class="event-image"
              />
            </div>
            <div class="event-info slide-up">
              <div class="event-date">📅 {{ event.date }}</div>
              <div class="event-location">📍 {{ event.location }}</div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
      <!-- Timeline çizgisi, swiper-container ile sınırlı -->
      <div class="timeline-line"></div>
    </div>
    <!-- Navigasyon butonları swiper-container altına konumlandırıldı -->
    <div class="nav-buttons">
      <button class="nav-button left" @click="prevSlide">‹</button>
      <button class="nav-button right" @click="nextSlide">›</button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
//eslint-disable-next-line
  name: 'Events',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      events: [
        { id: 1, date: '14 Aralık Pazar', location: 'Müzenin Kahvesi', title: "Etkinlik 1" },
        { id: 2, date: '26 Aralık Perşembe', location: 'Online', title: "Sektör Üstü Buluşmalar - 4" },
        { id: 3, date: '10 Ocak Cuma', location: 'Teknoloji Merkezi', title: "Etkinlik 3" },
        { id: 4, date: '20 Aralık Pazar', location: 'Kodlama Atölyesi', title: "Etkinlik 4" },
      ]
    };
  },
  methods: {
    nextSlide() {
      this.$refs.swiper.$el.swiper.slideNext();
    },
    prevSlide() {
      this.$refs.swiper.$el.swiper.slidePrev();
    }
  }
};
</script>

<style scoped>
.timeline-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

.swiper-container {
  position: relative;
}

.fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}

/* Timeline çizgisi: container genişliğine göre %80 genişlik, ortalanmış */
.timeline-line {
  position: absolute;
  top: 105%;
  left: -20px;  /* Soldan 20px daha dışa çıkar */
  right: -20px;
  height: 4px;
  background-color: red;
  z-index: -1;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  transition: transform 0.5s ease-in-out;
}

/* Yukarıdaki kartlar biraz daha yukarıda, aşağıdaki kartlar biraz daha aşağıda */
.timeline-item.top {
  transform: translateY(350px);
}
.timeline-item.bottom {
  transform: translateY(0px);
}

.event-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.event-card {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

.event-image {
  width: 80%;
  border-radius: 25px;
  box-shadow: 0px 4px 10px rgba(255, 0, 0, 0.68);
}

.event-info {
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
  font-weight: bolder;
  opacity: 0;
  animation: slideUp 0.5s ease-in-out 0.5s forwards;
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin: 20px auto 0;
  transform: translateY(-38px);

}

.nav-button {
  background: none;
  color: #ff0000;
  border: none;
  font-size: 40px;
  margin: 0 -220px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0%;
  transition: transform 0.2s, background 0.3s;
}

.nav-button:hover {
  transform: scale(1.5);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.event-link,
.event-link:link,
.event-link:visited,
.event-link:hover,
.event-link:active {
  color: #000000;
  text-decoration: none;
}


@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.nav-button:focus {
  outline: none;
}

.swiper {
  overflow: visible;
}
</style>
