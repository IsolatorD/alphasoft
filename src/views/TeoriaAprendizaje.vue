<template>
  <v-container fluid>
    <v-row class="py-12 px-5">
      <v-col
        cols="12"
        class="d-flex align-center px-12"
      >
        <v-row>
          <v-col
            cols="12"
          >
            <h1 class="title-init">
              Teoria del Aprendizaje (Conectivismo)
            </h1>
          </v-col>
          <v-col
            cols="12"
          >
            <span class="headline">
              En esta publicación te hablaremos sobre lo que es el conectivismo.
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
     <v-row class="pb-12 px-5">
       <v-col cols="12" class="d-flex justify-center">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/FjEm0moY9Js" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </v-col>
       <v-col cols="12" class="pa-12">
         <span class="headline">
           Conectivismo (Teoria del aprendizaje para la era digital):
          <br>
          <br>
          Esta teoría se origina como parte del desarrollo tecnológico y digital de la actualidad, e implica la integración de las nuevas tecnologías en el proceso educativo.
          <br>
          <br>
          El conectivismo señala que el conocimiento no solamente reside en el ser humano, sino fuera de él, por ejemplo en bases de datos, es por ello que se entiende al aprendizaje como un proceso continuo que ocurre en distintos escenarios (lugar de trabajo, redes personales) y momentos de forma natural e incluso espontánea, por lo que no se puede hablar de transferencia o construcción.
          <br>
          <br>
          Al reconocer que el aprendizaje ha dejado de ser sólo una actividad interna e individual y que el entorno es cambiante, este modelo propone la integración de las tecnologías de la información y comunicación, redes sociales, entre otros recursos al proceso de enseñanza-aprendizaje.
          <br>
          <br>
          Idea central:
          <br>
          <br>
         </span>
          <div class="cita">
            <span class="headline font-weight-bold">
              "El conocimiento reside en el ser humano y fuera de él (bases de datos), por lo que el aprendizaje es un proceso de conexión de fuentes de información".
            </span>
          </div>
       </v-col>
     </v-row>
     <v-row class="py-12">
      <v-col cols="12">
        <div class="fb-comments" :data-href="url" data-width="100%" data-numposts="10"></div>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/footer'
export default {
  name: 'TeoriaAprendizaje',
  components: { Footer },
  data: () => ({
    url: window.location.href
  })
}
</script>

<style>
.cita {
  border-radius: 10px;
  background-color: lightgray;
  padding: 2rem 4rem;
}

</style>