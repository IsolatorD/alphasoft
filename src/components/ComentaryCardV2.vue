<template>
  <v-card
    elevation="24"
    max-width="600"
    class="mx-auto"
  >
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      v-model="slide"
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="350"
    >
      <v-carousel-item
        v-for="(item, i) in data"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col cols="12" class="d-flex justify-center px-12">
              "{{ item.comentary }}"
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-list two-line>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ getActualUser.username }}</v-list-item-title>
          <v-list-item-subtitle>{{ getActualUser.companyName }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    colors: [
      'green',
      'secondary',
      'yellow darken-4',
      'red lighten-2',
      'orange darken-1',
    ],
    slide: 0,
    cycle: false
  }),
  computed: {
    getActualUser() {
      return this.data[this.slide]
    }
  }
}
</script>

<style>

</style>