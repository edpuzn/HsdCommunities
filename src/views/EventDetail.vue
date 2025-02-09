<template>
  <div class="event-page">
    <div class="event-container">
      <!-- Sol Kart -->
      <div class="event-card">
        <div class="event-card-body">
          <h2 class="event-title">SEKTÖR ÜSTÜ<br>BULUŞMALAR - 4</h2>
          <img src="@/assets/event1.png" alt="Sektör Buluşmaları" class="sector-image">
          <div class="event-meta">
            <p class="date">26 Aralık Perşembe</p>
            <p class="time">19:30</p>
            <p class="platform">Google Meet</p>
          </div>
        </div>
      </div>

      <!-- Sağ İçerik -->
      <div class="event-details">
        <div class="time-section">
          <div class="time-column">
            <div class="time-header">BAŞLANGIÇ</div>
            <div class="time-value">28 ARALIK PERŞEMBE<br><span class="highlight-time">19:30</span></div>
          </div>
          <div class="time-column">
            <div class="time-header">BİTİŞ</div>
            <div class="time-value">28 ARALIK PERŞEMBE<br><span class="highlight-time">20:30</span></div>
          </div>
          <div class="timezone">GMT+3 İSTANBUL</div>
        </div>

        <div class="online-badge">📍 ONLINE</div>

        <div class="description">
          <p>HAFTADA İKİ KEZ DÜZENLEDİĞİMİZ 'SEKTÖR ÜSTÜ BULUŞMA' ETKİNLİKLERİMİZİN<br>
            BU HAFTAKİ KONUKLARIMIZDAN BİRİ OLAN ESAT GÜLKAYA BEY'İ 26 ARALIK<br>
            PERŞEMBE GÜNÜ AĞIRLAYACAĞIZ.</p>

          <p>KENDİSİ BİZLERLE SEKTÖR TECRÜBELERİNİN YANINDA İŞ HAYATINA NASIL<br>
            HAZIRLANIRIZ? GİBİ SORULARI DA YANITLAMAK İÇİN GELİYOR. BU FIRSATI<br>
            KAÇIRMAYIN!</p>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <span class="icon">👥</span> DÜZENLEYEN <span class="highlight">HSD FIRAT</span>
          </div>
          <div class="info-item">
            <span class="icon">🎟</span> BİLET <span class="highlight">Ücretsiz</span>
          </div>
          <div class="info-item">
            <span class="icon">🎓</span> KONTENJAN <span class="highlight">Sınırsız</span>
          </div>
        </div>

        <button class="register-btn">KAYIT OL</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-page {
  padding: 2rem;
  background: white; /* Gri arka plan kaldırıldı */
  font-family: Arial, sans-serif;
}

.event-container {
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.event-card {
  flex: 1;
  background: white;
  border-right: 2px solid #eee;
  padding-right: 2rem;
}

.event-title {
  font-size: 32px;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-transform: uppercase;
}

.sector-image {
  width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
  border-radius: 8px;
}

.event-meta {
  margin-bottom: 2rem;
}

.date, .time {
  font-size: 24px;
  color: #444;
  margin: 0.5rem 0;
}

.platform {
  color: #666;
  font-size: 18px;
}

.speaker-info {
  margin-top: 2rem;
}

.speaker-name {
  color: #c00;
  font-size: 24px;
  margin: 0.5rem 0;
}

.speaker-title {
  color: #666;
  line-height: 1.4;
}


.event-details {
  flex: 2;
}

.time-section {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.time-column {
  flex: 1;
}

.time-header {
  color: #666;
  font-size: 14px;
  margin-bottom: 0.5rem;
}

.time-value {
  font-size: 18px;
  line-height: 1.4;
}

.highlight-time {
  color: #c00;
  font-size: 24px;
}

.timezone {
  color: #666;
  text-align: right;
  margin-top: 0.5rem;
}

.online-badge {
  background: #e8f5e9;
  color: #2e7d32;
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  margin: 1rem 0;
}

.description {
  color: #444;
  line-height: 1.6;
  margin: 2rem 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}

.info-item {
  border: 2px solid #eee;
  padding: 1rem;
  border-radius: 8px;
}

.info-item span {
  display: block;
  color: #e30000;
  margin-bottom: 0.5rem;
}

.highlight {
  color: #c00;
  font-weight: bold;
  font-size: 18px;
}

.register-btn {
  width: 100%;
  background: #c00;
  color: white;
  padding: 16px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s;
}

.register-btn:hover {
  background: #a00;
}
</style>
