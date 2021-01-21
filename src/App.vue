<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
          <!-- class="shrink mr-2" -->
          <!-- contain -->
        <img
          alt="logo"
          :src="require('./assets/img/logo4.png')"
          width="145px"
        >
          <!-- transition="scale-transition" -->
        <!-- <span class="headline font-weight-medium">
          Alphasoft
        </span> -->
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.smAndDown">
        <v-menu
          bottom
          left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn
          v-for="(item, j) in items"
          :key="j"
          :to="item.to"
          class="py-8"
          text
        >
          <span class="mr-2">{{ item.title }}</span>
        </v-btn>
      </v-toolbar-items>
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
  name: 'App',
  data: () => ({
    items: [
      {title: 'Inicio', to: '/'},
      {title: 'Sobre Nosotros', to: '/about'},
      {title: 'Blog', to: '/blog'},
    ]
  })
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