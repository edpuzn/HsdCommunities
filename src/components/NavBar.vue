<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <h2 class="navbar-brand" >
        <span class="hsd-text">HSD</span> COMMUNITIES
      </h2>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
                to="/"
                class="nav-link"
                :class="{ active: activeTab === 'home' }"
                @click="setActiveTab('home')"
            >
              HOME
            </router-link>
          </li>
          <li class="nav-item separator"></li>
          <li class="nav-item">
            <router-link
                to="/blogs"
                class="nav-link"
                :class="{ active: activeTab === 'blogs' }"
                @click="setActiveTab('blogs')"
            >
              BLOGS
            </router-link>
          </li>
          <li class="nav-item separator"></li>
          <li class="nav-item">
            <router-link
                to="/about"
                class="nav-link"
                :class="{ active: activeTab === 'about' }"
                @click="setActiveTab('about')"
            >
              ABOUT
            </router-link>
          </li>
          <li class="nav-item separator"></li>
          <li class="nav-item">
            <router-link
                to="/events"
                class="nav-link"
                :class="{ active: activeTab === 'events' }"
                @click="setActiveTab('events')"
            >
              EVENTS
            </router-link>
          </li>
          <li class="nav-item separator"></li>
          <li class="nav-item">
            <router-link
                to="/contact"
                class="nav-link"
                :class="{ active: activeTab === 'contact' }"
                @click="setActiveTab('contact')"
            >
              CONTACT
            </router-link>
          </li>
          <li class="nav-item separator"></li>
        </ul>
        <div class="auth-buttons mt-2 mt-lg-0">
          <router-link
              to="/login"
              class="btn btn-outline-primary me-2"
              active-class=""
              @click="setActiveTab('login')"
          >
            Login
          </router-link>

          <router-link
              to="/sign_up"
              class="btn btn-primary me-2"
              active-class=""
              @click="setActiveTab('sign_up')"
          >
            Sign Up
          </router-link>



        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      activeTab: 'home'
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Andada+Pro:ital,wght@0,400..840;1,400..840&family=Cormorant+SC:wght@300;400;500;600;700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Italianno&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');


.nav-item{
  font-family: "Andada Pro", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar {
  background-color: #f8f9fa;
  border-bottom: 2px solid #ff0000;
  padding: 0.5rem 1rem;

}

/* Navbar marka stil */
.navbar-brand {
  font-family: "Andada Pro", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
}

.nav-link {
  font-size: 1rem;
  color: #000000;
  margin: 0 0.5rem;
  font-weight: 700;
  position: relative;
}

/* Hover durumu */
.nav-link:hover {
  color: #000000;
  opacity: 0.8;
}

/* Aktif sekme altındaki kırmızı çizgi */
.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: #ff0000;
}

/* Buton stil */
.auth-buttons {
  font-family: "Andada Pro", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;

}

.btn-outline-primary {
  border-color: #ffffff;
  background-color: #ff0000;
  color: #ffffff;

}

.btn-primary {
  border-color: #ffffff;
  background-color: #000000;
  color: #fff;
}

.btn-primary:hover {
  background-color: #ff0000;
}

/* Düz çizgi için stil */
.nav-item.separator {
  border-left: 1px solid #ff0000;
  height: 30px;
  margin: 0 1rem;
  align-self: center;
}

/* Navbar içindeki butonları mobilde alt alta almak için */
@media (max-width: 991px) {
  .auth-buttons {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .auth-buttons a {
    width: 100%;
    margin-top: 10px;
  }
}
.hsd-text {
  color: #ff0000;
}

.navbar-toggler {
  display: none !important;
}
.navbar .container-fluid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-collapse {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.btn-outline-primary:focus,
.btn-primary:active {
  background-color: #ff0000 !important;
  border-color: #ffffff !important;
  color: white !important;
  outline: none !important;
  box-shadow: none !important;
}


</style>
