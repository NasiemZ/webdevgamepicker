<template>
<v-sheet>
  <v-card>
    <v-app-bar app fixed color = "#16a085">
      <v-app-bar-nav-icon class="white--text" @click = "drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">Gamepicker</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-card>
  <v-navigation-drawer app v-model="drawer"  temporary>
    <v-list
        dense
        nav
    >
      <router-link
          style="text-decoration: none"
          v-for="item in items"
                    :key="item.title"
                    :to="{path:item.path}">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

    </v-list>
  </v-navigation-drawer>
</v-sheet>

</template>

<script>
export default {
  name: "Sidebar",
  data(){
   return {
     drawer: false,
     items: [
       { title: 'Home', icon: 'mdi-home',path: "/" },
       { title: 'View Game List', icon: 'mdi-view-list',path: "/viewgame" },
       { title: 'Random Game', icon: 'mdi-dice-6',path: "/random" },
       { title: 'Impressum', icon: 'mdi-domain',path: "/impressum" },
       { title: 'FAQ', icon: 'mdi-help-box',path: "/faq" },
     ]
   }
  }

}
</script>

<style scoped>

</style>