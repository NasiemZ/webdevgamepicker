<template>
  <v-container fill-height fluid class="picture">
    <v-layout justify-center>
      <div class="pa-10">
        <v-btn color="#16a085" class="white--text ma-3" @click="getRandom">Get Random Game</v-btn>
        <v-data-table
            :headers="headers"
            :items="game"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
        ></v-data-table>
        <div class="text-center pt-2">
          <v-pagination
              color="#16a085"
              v-model="page"
              :length="pageCount"
          ></v-pagination>
        </div>
        <v-dialog
            v-model="dialog"
            width="350"
        >
          <v-card>
            <v-card-title class="text-h5  grey lighten-2">
              Your Random Game
            </v-card-title>
            <v-card-text class="black--text">
              ID: {{ randomGame.id }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="black--text">
              Name: {{ randomGame.name }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="black--text">
              Platform: {{ randomGame.platform }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="black--text">
              Genre: {{ randomGame.genre }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="black--text">
              Rating: {{ randomGame.rating }}
            </v-card-text>


            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
              >
                ok
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-layout>

  </v-container>
</template>

<script>
import Gameservice from "@/services/Gameservice";

export default {
  name: "Random",
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {text: 'ID', value: 'id',},
        {text: 'Game Name', value: 'name'},
        {text: 'Platform', value: 'platform'},
        {text: 'Genre', value: 'genre'},
        {text: 'Rating', value: 'rating'},
      ],
      gamePlatform: [],
      gameGenre: [],
      game: [],
      randomGame: "",
      dialog: false
    }
  }, methods: {
    getGenre() {
      Gameservice.getGenre().then((response) => {
        this.gameGenre = response.data;
      })
    },
    getGames() {
      Gameservice.getGame().then((response) => {
        this.game = response.data;
        this.gameNames = response.data.map(data => data.id)

      });
    },
    getRandom() {
      Gameservice.getRandom().then((response) => {
        this.randomGame = response.data;
        console.log(this.randomGame)
        this.dialog = true
      })
    }
  },
  created() {
    this.getGames()
    this.getGenre()
  }
}

</script>

<style scoped>
.picture {
  background: url("../assets/gameIMG.jpg") no-repeat center center fixed;
  background-size: cover;
  position: static;
}
</style>