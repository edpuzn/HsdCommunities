<template>
  <div class="about-container container py-5">

    <!-- HSD FIRAT AÇIKLAMA METNİ -->
    <div class="row mt-5">
      <div class="col-12 text-center hsd-description">
        <h2 class="hsd-title">HSD FIRAT</h2>
        <p>
          HSD Fırat: Teknolojiye ve Yeniliğe Açılan Kapı!
          <br>
          Mart 2024 itibarıyla yönetimine başladığımız HSD Fırat olarak, teknolojiye, yeniliğe ve öğrenci gelişimine odaklanan dinamik bir topluluğuz. 🚀 Üniversite öğrencilerinin yazılım dünyasında kendilerini geliştirmelerine olanak tanıyan, sürekli öğrenmeyi ve üretkenliği teşvik eden bir ekosistem oluşturmayı hedefliyoruz.
          <br>
          Fırat Üniversitesi bünyesinde faaliyet gösteren kulübümüz, öğrencilere hem akademik hem de sektörel anlamda kendilerini geliştirme fırsatı sunmayı amaçlamaktadır. Alanında uzman konuşmacılarla düzenlediğimiz seminerler, teknik eğitimler sayesinde üyelerimiz yazılım sektöründeki en güncel gelişmeleri takip edebilir, kariyerleri için önemli bilgiler edinebilirler.
          <br>
          Kulübümüz; yazılım geliştirme, yapay zeka, mobil ve web uygulamaları, siber güvenlik ve blockchain gibi günümüzün en popüler teknolojileri üzerine çeşitli etkinlikler düzenlemektedir. Gerçekleştirdiğimiz eğitimler ve seminerler, öğrencilere teknik bilgi kazandırmanın yanı sıra sektörde güçlü bağlantılar kurma fırsatı da sunmaktadır.
          <br>
          HSD Fırat, yalnızca bir öğrenci kulübü olmanın ötesinde, birlikte öğrenen, üreten ve gelişen bir topluluk olmayı amaçlamaktadır. Eğer sen de teknolojiye ilgi duyuyor, kendini geliştirmek ve sektörde fark yaratmak istiyorsan, HSD Fırat ailesine katıl ve bu heyecan verici yolculukta yerini al! 💡✨
        </p>
      </div>
    </div>
    <!-- Kırmızı Dalgalı Ayırıcı -->
    <div class="line-container">
      <img src="@/assets/mini-line.png" alt="Mini Line" class="mini-line">
    </div>

    <div class="events-container mt-5">
      <div class="swiper-wrapper">
        <div class="swiper-custom-prev" @click="prevSlide">
          <span>&#8249;</span>
        </div>
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="30"
            :breakpoints="{
        640: { slidesPerView: 1 },
      }"
        >
          <swiper-slide v-for="(event, index) in events" :key="index">
            <div class="event">
              <div class="event-content">
                <div class="date">{{ event.date }}</div>
                <div class="content">
                  <h3>{{ event.title }}</h3>
                  <p>{{ event.description }}</p>
                </div>
              </div>
              <div class="event-image">
                <img :src="event.image" alt="Event Image">
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- Özel Butonlar -->

        <div class="swiper-custom-next" @click="nextSlide">
          <span>&#8250;</span>
        </div>
      </div>
    </div>

    <!-- Kırmızı Dalgalı Ayırıcı -->
    <div class="line-container">
      <img src="@/assets/mini-line.png" alt="Mini Line" class="mini-line">
    </div>
    <!-- Misyon ve Vizyon Bölümü -->
    <div class="row mt-5 mission-vision-section">
      <!-- Misyonumuz -->
      <div class="col-md-5 mission-box">
        <div class="mission-content">
          <h2 class="section-title">MİSYONUMUZ 🚀💡</h2>
          <p class="section-text">
            Öğrencilerin teknik becerilerini geliştirmelerine, gerçek projelerde aktif rol almalarına ve yazılım dünyasında sağlam bir yer edinmelerine destek olmak en büyük hedefimizdir. 🚀💡 Eğitimler,  seminerler aracılığıyla teknik bilgi ve deneyim kazandırırken, katılımcılarımızın problem çözme yetkinliklerini artırmalarını sağlıyoruz. Aynı zamanda, sektörde güçlü bir ağ oluşturmalarına yardımcı olarak kariyer yolculuklarında daha emin adımlarla ilerlemelerini teşvik ediyoruz.
            Teknolojiye ilgi duyan herkes için öğrenmeye, üretmeye ve gelişmeye açık bir ekosistem yaratmak en büyük önceliğimizdir! 💻✨
          </p>
        </div>
      </div>

      <!-- Dalgalı çizgi bölme -->
      <div class="col-md-2 d-flex align-items-center justify-content-center">
        <div class="divider"></div>
      </div>

      <!-- Vizyonumuz -->
      <div class="col-md-5 vision-box">
        <div class="vision-content">
          <h2 class="section-title">VİZYONUMUZ 🚀💡</h2>
          <p class="section-text">
            Fırat Üniversitesi’nin en aktif ve yenilikçi öğrenci topluluklarından biri olarak, teknolojiye ilgi duyan herkes için değerli bir öğrenme ortamı oluşturmayı hedefliyoruz. 🚀💡 Amacımız, yazılım ve teknolojiye meraklı öğrencilerin kendilerini geliştirebilecekleri, gerçek dünyaya yönelik projelerde yer alabilecekleri ve sektörde fark yaratabilecekleri bir ekosistem yaratmaktır. <br>
            Kulübümüze katılarak, teknolojiye olan ilginizi pratiğe dökebilir, çeşitli etkinlikler ve eğitimlerle teknik becerilerinizi geliştirebilir ve ekip ruhuyla çalışarak kariyeriniz için önemli adımlar atabilirsiniz. Ayrıca, alanında uzman isimlerle düzenlediğimiz seminerler  sayesinde sektörde güçlü bir ağ oluşturabilir, geleceğin başarılı yazılımcıları arasında yerinizi alabilirsiniz.<br>
         </p>
        </div>
      </div>
    </div>

    <!-- Kırmızı Dalgalı Ayırıcı -->
    <div class="line-container">
      <img src="@/assets/mini-line.png" alt="Mini Line" class="mini-line">
    </div>

    <h2 class="mb-4 text-center title">Projeye Katkı Sağlayanlar</h2>
    <div class="row">
      <!-- Frontend Team -->
      <div class="col-md-4">
        <h3 class="team-title">Frontend Team</h3>
        <div class="team-box">
          <div v-for="member in frontendTeam" :key="member.name" class="team-member d-flex align-items-center">
            <img :src="member.image" alt="Member Photo" class="team-img">
            <div class="member-info">
              <h5 class="member-name">{{ member.name }}</h5>
              <p class="member-role">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Central Section with HSD Logo -->
      <div class="col-md-4 d-flex flex-column align-items-center justify-content-center">
        <img :src="hsdLogo" alt="HSD Logo" class="hsd-logo img-fluid mb-3">
        <h2 class="university-title">Fırat Üniversitesi</h2>
      </div>

      <!-- Backend Team -->
      <div class="col-md-4">
        <h3 class="team-title">Backend Team</h3>
        <div class="team-box">
          <div v-for="member in backendTeam" :key="member.name" class="team-member d-flex align-items-center">
            <img :src="member.image" alt="Member Photo" class="team-img">
            <div class="member-info">
              <h5 class="member-name">{{ member.name }}</h5>
              <p class="member-role">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Central Team -->
    <div class="row mt-5" v-if="centralTeam.length">
      <div class="col-12">
        <h3 class="team-title text-center">Central Team</h3>
        <div class="team-box central-team-box d-flex flex-wrap justify-content-center">
          <div v-for="member in centralTeam" :key="member.name" class="team-member d-flex align-items-center">
            <img :src="member.image" alt="Member Photo" class="team-img">
            <div class="member-info">
              <h5 class="member-name">{{ member.name }}</h5>
              <p class="member-role">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import sena from '@/assets/ekip/sena.jpg';
import edip from '@/assets/ekip/edip.jpg';
import duygu from '@/assets/ekip/duygu.jpg';
import mete from '@/assets/ekip/mete.jpg';
import miray from '@/assets/ekip/miray.jpg';
import inanc from '@/assets/ekip/edip.jpg';
import yusuf from '@/assets/ekip/edip.jpg';
import salih from '@/assets/ekip/salih.jpg';
import kutay from '@/assets/ekip/kutay.jpg';
import asli from '@/assets/ekip/asli.jpg';
import hsdLogo from '@/assets/hsd-logo.png';
import event from '@/assets/event1.png';


export default {
  name: 'AboutSection',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation, Pagination]
    }
  },
  data() {
    return {
      frontendTeam: [
        { name: "M. Edip UZAN", role: "Frontend Lead Developer", image: edip },
        { name: "Duygu NAZLI", role: "Frontend Developer", image: duygu },
        { name: "Miray TEPE", role: "Frontend Developer", image: miray },
        { name: "Sena Nur ÇULCU", role: "UI/UX Designer", image: sena },

      ],
      centralTeam: [
        { name: "İnanç ÇOLAK", role: "HSD Fırat Kampüs Elçisi", image: inanc },
        { name: "Yusuf AYTAŞ", role: "Kulüp Başkan Yardımcısı", image: yusuf },
      ],
      backendTeam: [
        { name: "Salih Furkan ERİK", role: "Backend Developer", image: salih },
        { name: "Kutay ŞAHİN", role: "Backend Developer", image: kutay },
        { name: "Aslı Nur EKİNCİ", role: "Backend Developer", image: asli },
        { name: "Metehan YILMAZ", role: "Backend Developer", image: mete },
      ],
      hsdLogo: hsdLogo,
      events: [
        {
          date: "5 Mayıs 2024",
          title: "Coffee Talk: Yazılım Dünyasına Dair İlham Veren Sohbetler!",
          description: "Sıcak kahveler eşliğinde yazılım sektöründen değerli bir isimle bir araya geldiğimiz Coffee Talk etkinliğimizde, sektöre dair önemli konuları ele aldık. ☕💡 Katılımcılar, kariyer yolculuğu, sektör trendleri ve yazılım dünyasındaki fırsatlar hakkında ilham verici sohbetlere katılma şansı yakaladı.",
          image: event
        },
        {
          date: "9 Mayıs 2024",
          title: "Techcareer & Roof Stacks ile Geleceğe Bakış!",
          description: "Yazılım dünyasının önde gelen isimleriyle bir araya geldiğimiz bu özel seminerde, Techcareer ve Roof Stacks'ten değerli konuklarla buluştuk! 🚀💻 Sektörün dinamikleri, kariyer fırsatları ve güncel teknolojiler hakkında bilgi edinirken, uzmanlardan ilham verici deneyimler dinledik. Katılımcılar, yazılım sektörüne dair sorularına yanıt buldu ve kariyer yolculuklarını şekillendirmek için rehberlik aldı.",
          image: event
        },
        {
          date: "16 Mayıs 2024",
          title: "Geleceğin Yazılımcılarıyla Buluşma!",
          description: "Lise öğrencilerine yazılım dünyasını tanıtmak ve ilham vermek amacıyla düzenlediğimiz bu seminerde, gençlerle bir araya geldik! 🚀💻 Yazılımın temellerinden sektördeki kariyer fırsatlarına kadar pek çok konuyu ele aldık, merak edilen soruları yanıtladık ve yazılım dünyasına ilk adımlarını atmalarına rehberlik ettik.",
          image: event
        },
        {
          date: "18 Mayıs 2024",
          title: "Java ile Yüzleşme: Kodlarla Dolu Bir Eğitim Serisi!",
          description: "Kulübümüz tarafından düzenlenen Java ile Yüzleşme programında, Java dünyasına derinlemesine bir yolculuk yaptık! 💻🔥 Temel kavramlardan ileri düzey konulara kadar geniş bir yelpazede eğitimler düzenleyerek katılımcıların Java becerilerini geliştirmelerine destek olduk.",
          image: event
        },
        {
          date: "22 Mayıs 2024",
          title: "Açık Hava Sineması: Yıldızların Altında Unutulmaz Bir Gece!",
          description: "📽️ Kulübümüzün düzenlediği Açık Hava Sineması etkinliğinde, keyifli anlar paylaştık, güzel sohbetler ettik ve sinemanın büyüsünü açık havada deneyimledik. Atıştırmalıklarımız ve rahat atmosferimizle unutulmaz bir gece geçirdik.",
          image: event
        },
        {
          date: "6 Kasım 2024",
          title: "Kulübümüzün Stant Günü",
          description: "Birlikte büyüyen ve gelişen bir topluluk! 🎉 Stant Günümüzde, kulübümüzü tanıtmak, yeni üyelerle buluşmak ve projelerimizi paylaşmak için bir araya geldik. Heyecan verici sohbetler, yeni dostluklar ve ilham verici fikirlerle dolu harika bir gün geçirdik.",
          image: event
        },
        {
          date: "20 Aralık 2024",
          title: "Code Night: Teknoloji ve Rekabetin Buluşma Noktası!",
          description: "Kodlamaya ve yeniliğe adanmış unutulmaz bir gece! 🌙💻 Code Night etkinliğimizde, çeşitli yarışmalarla yeteneklerimizi test ettik, sektör profesyonelleriyle ilham verici buluşmalar gerçekleştirdik ve bilgi paylaşımının keyfini çıkardık. Tabii ki, bu yoğun tempoda enerjiyi depolamak için çeşitli ikramlarımız da vardı. 🚀",
          image: event
        },
        {
          date: "3 Ocak 2025",
          title: "Sektör Üstü Buluşmalar: Geleceğe Yön Veren Sohbetler!",
          description: "Alanında uzman isimlerle bir araya gelerek sektördeki yenilikleri, kariyer fırsatlarını ve ilham verici başarı hikayelerini dinlediğimiz Sektör Üstü Buluşmalar serimizi sürdürüyoruz! 🚀💡 Bu etkinliklerde, katılımcılar sektör profesyonelleriyle doğrudan iletişim kurma şansı yakalarken, gelecekteki kariyer planları için değerli bilgiler ediniyor. Teknoloji dünyasında fark yaratmak isteyen herkes için eşsiz bir deneyim! 🔥",
          image: event
        }
      ]
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
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cormorant+SC:wght@300;400;500;600;700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Italianno&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');


.line-container {
  text-align: center;
  margin: 20px 0;
}

.mini-line {
  width: 100%;
  max-width: 500px;
  display: inline-block;
}

.events-container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.event {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.event-content {
  width: 45%;
  padding: 15px;
  border-radius: 8px;
}

.date {
  font-weight: bold;
  color: #d32f2f;
  margin-bottom: 10px;
}

.event-image {
  width: 45%;
  display: flex;
  justify-content: center;
}

.event-image img {
  max-width: 100%;
  border-radius: 8px;
}

.event::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #d32f2f;
  transform: translateX(-50%);
}

.mission-vision-section {
  display: flex;
  justify-content: center;
  text-align: center;
}

.mission-box, .vision-box {
  border: 3px solid #8b0000;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-style: normal;

  color: #8b0000;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.section-text {
  font-family: "Alice", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.divider {
  width: 600px;
  height: 50px;
  background-image: url('@/assets/wavy-line.png'); /* Dalgalı çizgi için */
  background-size: cover;
  background-repeat: no-repeat;
}

.title {
  font-family: "Cormorant SC", serif;
  font-weight: 700;
  font-style: normal;
  color: #8b0000;
  margin-bottom: 30px;
}

.team-title {
  font-family: "PT Serif", serif;
  font-style: normal;
  color: #8b0000;
  font-weight: bold;
  margin-bottom: 15px;
  border-bottom: 2px solid #8b0000;
  display: inline-block;
  padding-bottom: 5px;
}

.team-box {
  border: 2px solid #8b0000;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.team-member {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.team-member:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.team-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #8b0000;
}

.member-info {
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  flex-direction: column;
}

.member-name {
  font-weight: bold;
  margin: 0;
}

.member-role {
  color: #8b0000;
  font-size: 0.9rem;
  margin: 0;
}

.hsd-logo {
  max-width: 200px;
  transition: transform 0.3s ease;
}

.hsd-logo:hover {
  transform: scale(1.1);
}

.university-title {
  font-family: "Italianno", serif;
  font-style: normal;
  color: #8b0000;
  font-weight: bold;
  font-size: 3.5rem;
}

.central-team-box {
  border: 2px dashed #8b0000;
  border-radius: 10px;
  padding: 20px;
}
.hsd-description {
  font-family: "Cormorant SC", serif;
  font-weight: bolder;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 20px;
}
.hsd-title {
  color: #8b0000;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 15px;
}

/* Özel Buton Stilleri */
.swiper-custom-prev,
.swiper-custom-next {
  position: static;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.swiper-custom-prev:hover,
.swiper-custom-next:hover {
  background: #8b0000;
  border-color: #8b0000;
}

.swiper-custom-prev:hover span,
.swiper-custom-next:hover span {
  color: white;
}

.swiper-custom-prev span,
.swiper-custom-next span {
  font-size: 24px;
  color: #8b0000;
  font-weight: bold;
  transition: color 0.3s ease;
}

.events-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.swiper-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px; /* Butonlar ile Swiper arasındaki boşluk */
}

/* Özel Buton Stilleri */
.swiper-custom-prev,
.swiper-custom-next {
  position: static;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.swiper-custom-prev:hover,
.swiper-custom-next:hover {
  background: #ff0000;
  border-color: #ff0000;
}

.swiper-custom-prev:hover span,
.swiper-custom-next:hover span {
  color: white;
}

.swiper-custom-prev span,
.swiper-custom-next span {
  font-size: 24px;
  color: #ff0000;
  font-weight: bold;
  transition: color 0.3s ease;
}

/* Swiper'ın genişliğini ayarla */
.swiper {
  width: 100%;
  flex-grow: 1;
}

/* Responsive Tasarım */
@media (max-width: 768px) {
  .swiper-custom-prev,
  .swiper-custom-next {
    width: 40px;
    height: 40px;
  }

  .swiper-custom-prev span,
  .swiper-custom-next span {
    font-size: 20px;
  }
}

</style>
