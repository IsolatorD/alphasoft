<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        xl="5"
        lg="5"
        md="5"
        sm="12"
        xs="12"
        class="d-flex justify-center align-center pl-12"
      >
        <v-row>
          <v-col cols="12">
            <h1 class="title-init">
              Haz crecer tu negocio con nosotros
            </h1>
          </v-col>
          <v-col cols="12">
            <span class="headline">
              "La manera mas rapida y facil de crecer es gestionando mejor la forma en que llegas a tus clientes"
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        xl="7"
        lg="7"
        md="7"
        sm="12"
        xs="12"
      >
        <img
          src="../assets/img/10.jpeg"
          width="100%"
          height="100%"
        >
      </v-col>
    </v-row>
    <v-row id="nosotros" class="pt-12">
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12"

      >
        <img
          src="../assets/img/13.jpeg"
          width="100%"
          height="100%"
        >
      </v-col>
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12"

        class="px-12 d-flex align-center"
      >
        <v-row>
          <v-col cols="12" class="">
            <span class="headline font-weight-bold">
              Ayudamos a las empresas a desarrollar herramientas para mejorar sus productividad.
            </span>
          </v-col>
          <v-col cols="12">
            <span>
              Alphasoft ayuda a compañías y organizaciones aumentando su eficiencia y facilitando sus actividades a través del uso de la tecnología, haciendo posible su crecimiento sin que estas vean la necesidad de contratar servicios demasiado complejos para sus necesidades.
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row id="services" class="py-12 my-12">
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12"
        class="pl-12 d-flex align-center"
      >
        <v-row>
          <v-col cols="12">
            <p class="headline font-weight-bold">
              Desarrollamos productos de calidad
            </p>
            <span>
              Recibe un servicio personalizado
            </span>
          </v-col>
          <v-col cols="12" class="px-12">
            <ul>
              <li class="py-1">
                Te ayudamos a ver el alcance de tu proyecto
              </li>
              <li class="py-1">
                Planificación de requerimientos
              </li>
              <li class="py-1">
                Interfaces faciles de usar
              </li>
              <li class="py-1">
                Soporte personalizado de tu plataforma
              </li>
            </ul>
          </v-col>
          <v-col cols="12" class="px-12">
            <span>
              Contactanos y te daremos una solución adaptada a tus necesidades.
            </span>
          </v-col>
        </v-row>
      </v-col>
       <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12"
      >
        <img
          src="../assets/img/20.png"
          width="100%"
          height="100%"
        >
       </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
      >
        <v-row>
          <v-col cols="12" class="d-flex justify-center py-0">
            <h2>Lo que podemos hacer</h2>
          </v-col>
          <v-col cols="12" class="d-flex justify-center pt-2 pb-4">
            <span>Tenemos una amplia gana de servicios, estos son algunos de ellos</span>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        class="d-flex justify-center"
      >
        <v-row justify="center">
          <v-col
            cols="12"
            xl="5"
            lg="5"
            md="5"
            sm="12"
            xs="12"
            v-for="(option, i) in options"
            :key="i"
          >
            <v-card outlined>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="2" class="d-flex align-center">
                      <v-icon :color="option.color" size="40">{{option.icon}}</v-icon>
                    </v-col>
                    <v-col cols="10" class="d-flex align-center">
                      <v-row>
                        <v-col cols="12" class="py-0">
                          <span class="headline font-weight-medium">
                            {{ option.name }}
                          </span>
                        </v-col>
                        <v-col cols="12" class="py-0">
                          <span>
                            {{ option.description }}
                          </span>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row id="contacto" class="py-12 mt-5">
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12"
        class="d-flex align-center"
      >
        <v-row>
          <v-col cols="12" class="d-flex justify-center py-0">
            <h2>Contacta con nosotros</h2>
          </v-col>
          <v-col cols="12" class="d-flex justify-center pt-2 pb-4">
            <span>Escribe tu mensaje y te contactaremos en minutos</span>
          </v-col>
          <v-col cols="12" class="d-flex justify-center pl-12">
            <img
              src="../assets/img/15.png"
              width="90%"
              height="90%"
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12"
        class="d-flex justify-center"
      >
        <v-card outlined width="80%">
          <v-card-title>
            <span class="headline">Contactanos</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" class="">
                  <v-form>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Nombre"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Correo de contacto"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          label="Mensaje"
                          outlined
                          dense
                          no-resize
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" class="">
                        <v-btn block color="primary">
                          Enviar
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/footer'
export default {
  name: 'Home',
  components: {Footer},
  data: () => ({
    options: [
      {color: 'green', icon: 'mdi-android', name: 'Aplicaciones Moviles', description: 'Desarrollamos aplicaciones multiplataforma, rapidas y seguras.'},
      {color: 'grey', icon: 'mdi-application-cog', name: 'Aplicaciones Web', description: 'Aplicaciones web para la gestión de contenidos, clientes, productos.'},
      {color: 'grey', icon: 'mdi-open-in-app', name: 'Landing Pages', description: 'Impresionantes paginas de bienvenida y presentación de tu producto o marca.'},
      {color: 'primary', icon: 'mdi-bullhorn', name: 'Soporte de sistemas', description: 'Soporte personalizado para tus herramientas de trabajo.'}
    ]
  })
}
</script>

<style>

</style>