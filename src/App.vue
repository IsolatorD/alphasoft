<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <span class="headline font-weight-medium">
          Alphasoft
        </span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/"
        class="py-8"
        text
      >
        <span class="mr-2">Inicio</span>
      </v-btn>
      <v-btn
        to="/about"
        class="py-8"
        text
      >
        <span class="mr-2">Sobre Nosotros</span>
      </v-btn>
      <v-btn
        to="/blog"
        class="py-8"
        text
      >
        <span class="mr-2">Blog</span>
      </v-btn>
      <!-- <v-btn
        class="py-8"
        text
      >
        <span class="mr-2">Contactanos</span>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <transition name="fade">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.title-init {
  font-size: 2.5rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>