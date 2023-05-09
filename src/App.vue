<template>
  <header>
    <h1 id="logo">Dashboard</h1>
    <nav v-if="route.name != 'auth'">
      <RouterLink to="/doctors">Doctors</RouterLink>
      <RouterLink to="/patients">Patients</RouterLink>
    </nav>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="fade" appear>
      <component :is="Component" />
    </transition>
  </router-view>
  <footer>
    <p>Made for an interview by <a href="https://github.com/m-shrief">M.Shrief</a>
      on 5/2023 for Lab Digital System</p>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute();

</script>

<style lang="scss" scoped>
@import './assets/mixins.scss';
@include fade-transition;

header {
  margin: 1rem;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;

  @include mQ($breakpoint-md) {
    margin: 0.8rem;
  }

  @include mQ($breakpoint-sm) {
    margin: 0.6rem;
  }
}

nav {
  font-size: 1.2rem;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-radius: 1.5rem;
  }

  @include mQ($breakpoint-md) {
    font-size: 1rem;

    a {
      padding: 0 0.8rem;
    }
  }

  @include mQ($breakpoint-sm) {
    font-size: 0.8rem;

    a {
      padding: 0 0.6rem;
    }
  }

}

nav a.router-link-exact-active {
  border-radius: 1rem;
  color: $green;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

footer {
  position: relative;
  margin-top: 2rem;
  text-align: center;

  p {
    text-align: center;
  }

  @include mQ($breakpoint-md) {
    margin-top: 1.5rem;
  }
}
</style>
