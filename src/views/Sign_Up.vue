<template>
  <div class="login-container">
    <!-- Sol Tarafta Resim Alanı -->
    <div class="login-image">
      <img src="@/assets/login.png" alt="Signup Image" class="image-overlay">
    </div>

    <!-- Sağ Tarafta Form Alanı -->
    <div class="login-form">
      <div class="form-content">
        <h2 class="welcome-text">Hesabını oluştur</h2>

        <form @submit.prevent="handleSignUp">
          <div class="form-group">
            <input type="text" v-model="name" required placeholder="ADINIZ">
          </div>

          <div class="form-group">
            <input type="email" v-model="email" required placeholder="E-POSTA">
          </div>

          <div class="form-group">
            <input type="password" v-model="password" required placeholder="ŞİFRE">
          </div>

          <div class="form-group">
            <input type="password" v-model="confirmPassword" required placeholder="ŞİFREYİ TEKRAR GİR">
          </div>

          <div class="button-group">
            <button type="submit" class="login-button">Kayıt Ol</button>
          </div>

          <!-- Zaten hesabı var mı? -->
          <p class="redirect-text">
            Zaten bir hesabın var mı?
            <router-link to="/login" class="redirect-link">Giriş Yap</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleSignUp() {
      if (this.password !== this.confirmPassword) {
        alert("Şifreler eşleşmiyor!");
        return;
      }
      console.log("Kayıt yapılıyor:", {
        name: this.name,
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: #ffffff;
}

.login-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
}

.image-overlay {
  max-width: 100%;
  border-radius: 20px;
}

.login-form {
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f3f1;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-content {
  width: 100%;
  max-width: 300px;
}

.welcome-text {
  color: black;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 1rem;
  background: #fff;
}

.button-group {
  display: flex;
  justify-content: center;
}

.login-button {
  width: 100%;
  padding: 12px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
  background-color: #ff1800;
  color: white;
  border: none;
}

.login-button:hover {
  background-color: #ff2200;
}

.redirect-text {
  text-align: center;
  margin-top: 10px;
  font-size: 0.9rem;
}

.redirect-link {
  color: #ff1800;
  text-decoration: none;
  font-weight: bold;
}
</style>
