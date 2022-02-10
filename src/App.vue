<template>
  <v-app>
    <Sidebar></Sidebar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default {
  components: {Footer, Sidebar}
}
</script>