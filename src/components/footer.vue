<template>
  <div>
    <v-row id="footer" class="primary mt-12">
      <v-col cols="12" class="py-5 px-12">
        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <v-img
            alt="logo"
            contain
            :src="require('../assets/img/logo.jpeg')"
            width="200px"
            class="mb-4"
          />
          <span class="white--text py-2">
            Somos una empresa de desarrollo de software que trabaja con inteligencia y esfuerzo. Nuestro objetivo es ofrecer servicios de calidad que cumplan con los requerimientos de nuestros clientes, contribuyendo al crecimiento y mejora de su productividad.
          </span>
          <p class="white--text font-weight-bold py-2">info@alphasoft.com</p>
        </v-col>
      </v-col>
    </v-row>
    <v-row id="terms" class="primary darken-3">
      <v-col cols=12 class="d-flex align-center pl-12">
        <span class="white--text">
          <v-icon color="white">mdi-copyright</v-icon>
          Alphasoft 2020
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>