<template>
  <div class="login-container">
    <!-- Sol Tarafta Resim Alanı -->
    <div class="login-image">
      <img src="@/assets/login.png" alt="Login Image" class="image-overlay">
    </div>

    <!-- Sağ Tarafta Form Alanı -->
    <div class="login-form">
      <div class="form-content">
        <h2 class="welcome-text">Tekrar hoşgeldin :)</h2>

        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <input type="email" v-model="email" required placeholder="E-POSTA">
          </div>

          <div class="form-group">
            <input type="password" v-model="password" required placeholder="ŞİFRE">
          </div>

          <!-- Beni Hatırla Kutucuğu -->
          <div class="form-options remember-me-container">
            <label class="remember-me">
              <input type="checkbox" v-model="rememberMe">
              <span>Beni hatırla</span>
            </label>
            <a href="#" class="forgot-password">Şifremi unuttum</a>
          </div>

          <div class="button-group">
            <button type="submit" class="login-button">Giriş yap</button>
            <router-link to="/sign_up" class="register-button">Kayıt Ol</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    handleLogin() {
      console.log('Giriş yapılıyor:', {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
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

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 5px;
}

.remember-me input {
  display: none;
}

.remember-me span {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  font-size: 1rem;
  color: black;
}

.remember-me span::before {
  content: "✔";
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  background: #c0392b;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}

.forgot-password {
  color: black;
  text-decoration: none;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.login-button,
.register-button {
  flex: 1;
  padding: 12px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

.login-button {
  background-color: #ff1800;
  color: white;
  border: none;
}

.login-button:hover {
  background-color: #ff2200;
}

.register-button {
  text-align: center; /* Yazıyı ortala */
  background-color: white;
  color: black;
  border: 1px solid black;
  text-decoration: none; /* Alt çizgiyi kaldır */
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }

  .button-group {
    flex-direction: column;
  }
}
</style>
