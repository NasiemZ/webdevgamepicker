<template>
  <v-container fill-height fluid  class="picture">
  <v-layout justify-center align-center>
    <div class="div">
      <h1 class="white--text"> Welcome To Gamepicker</h1>
      <v-divider class="white"></v-divider>
      <h3 class="white--text"> The Next Gen Gaming Experience </h3>
    </div>
  </v-layout>
  </v-container>
</template>

<script>


export default {
  name: 'Home',

  components: {


  },
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
  background: url("../assets/gameIMG.jpg") no-repeat center center fixed;
  background-size: cover;
  position: static;
}
</style>
