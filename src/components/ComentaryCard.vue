<template>
  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400"
  >
    <v-card-title>
      <span class="title font-weight-light">{{ companyName }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "{{ comentary }}"
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ username }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ userOcupation }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    companyName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    userOcupation: {
      type: String,
      required: true
    },
    comentary: {
      type: String,
      required: true
    },
  }

}
</script>

<style>

</style>