<template>
  <v-container fill-height fluid  class="picture">
    <v-layout justify-center align-center>
      <div class="div">
        <h1 class="white--text">Imprint</h1>
        <v-divider class="white"></v-divider>
        <h4 class="white--text">Address</h4>

        <p class="white--text">Gamepicker GmbH<br>test straße 30<br>12345 test Stadt</p>
        <v-divider class="white"></v-divider>
        <v-spacer></v-spacer>
        <h4 class="white--text">contact</h4>
        <p class="white--text">gamepicker@gmpicker.de <br>+49 03 12345678</p>


      </div>
      <body></body>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Impressum"
}
</script>

<style scoped>
.div{
  background: #16a085;
  border-radius: 20px;
  margin: 50px;
  padding: 10px;
}
.picture {
  background: url("../assets/gaming.jpg") no-repeat center center fixed;
  background-size: cover;
  position: static;
}
</style>