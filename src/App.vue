<template>
  <Navbar :logo="logo" nestedLogo="nestedLogo" />
  <Navigation />

  <router-view v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <div :key="route.name">  
          <component :is="Component"></component>
        </div>
      </Transition>
    </router-view>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Navigation from "./components/Navigation.vue";
export default {
  components: { Navbar, Navigation },
  data() {
    return {
      logo: "Mars Jobs",
      pointer: "provided",
    };
  },
  provide() {
    return {
      logo: this.logo,
      nestedLogo: "nestedLogo",
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
  background-color: red;
  text-decoration: none;
  padding: 5px;
  /* border: 2px solid black;  */
  border-radius: 3px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
