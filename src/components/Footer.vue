<template>
  <v-footer
      color="#16a085"
      padless fixed app
  >
    <v-row
        justify="center"
        class="row1"
        no-gutters
    >
      <router-link
          style="text-decoration: none"
          v-for="link in links"
          :key="link.name"
          :to="{path:link.path}">
        <v-btn  color="white" text class="my-2">
          {{ link.name }}
        </v-btn>

      </router-link>
      <v-col
          class="text-center white--text"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Gamepicker</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: [
      {name: "Home", path: "/"} ,
      {name: "FAQ", path: "/faq"},
      {name: "Imprint", path: "/impressum"},
    ],
  }),
}
</script>

<style scoped>

</style>