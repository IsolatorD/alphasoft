<template>
  <v-container fluid>
    <v-row class="py-12 px-5">
      <v-col
        cols="12"
        class="d-flex align-center px-12 py-12"
      >
        <v-row>
          <v-col
            cols="12"
          >
            <h1 class="title-init">
              Blog
            </h1>
          </v-col>
          <v-col
            cols="12"
          >
            <span class="headline">
              Disfruta de algunas publicaciones informativas.
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col
            cols="12"
            xl="6"
            lg="6"
            md="6"
            sm="12"
            xs="12"
            v-for="(blog, i) in blogs"
            :key="i"
          >
            <v-card
              @click="navigateTo(blog.to)"
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="blog.img"
              >
                <v-card-title class="primary py-0">
                  {{ blog.title }}
                </v-card-title>
              </v-img>
              <v-card-text class="text--primary">
                <div>
                  {{ blog.description }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/footer'
export default {
  name: 'Blog',
  components: {Footer},
  data: () => ({
    blogs: [
      {
        title: 'Glosario de terminos',
        description: 'Te brindamos un extenso glosario de terminos para ampliar tu conocimiento.',
        img: require('../assets/img/2.jpeg'),
        to: '/blog/glosario'
      },
      {
        title: 'Teoria del Aprendizaje',
        description: 'Te damos una breve explicación sobre las teorias de aprendizaje.',
        img: require('../assets/img/4.jpeg'),
        to: '/blog/teoria_aprendizaje'
      },
    ]
  }),
  methods: {
    navigateTo(to) {
      this.$router.push(to)
    }
  }
}
</script>

<style>

</style>