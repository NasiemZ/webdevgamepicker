<template>
  <v-container fill-height fluid class="picture">
    <v-layout justify-center >
      <div >
        <v-data-table
            :headers="headers"
            :items="game"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
        >
          <template v-slot:top>
            <v-toolbar
                flat
            >
              <v-toolbar-title >Game List</v-toolbar-title>
              <v-divider
                  class="mx-4"
                  inset
                  vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <v-btn
                  color="#16a085"
                  class="mb-2 white--text"
                  @click="dialogAdd = true"
              >ADD Game
              </v-btn>

              <v-dialog
                  v-model="dialogEdit"
                  max-width="500px"
              >
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Add Game</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field

                              v-model="editedGame.name"
                              label="Game name"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-select
                              :items="gamePlatform"
                              v-model="editedGame.platform"
                              label="Platform"
                          ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-select
                              :items="gameGenre"
                              v-model="editedGame.genre"
                              label="genre"
                          ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-rating
                              v-model="editedGame.rating"
                              label="Rating"
                          ></v-rating>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="grey"
                        text
                        @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                        color="green"
                        text
                        @click="editGame()"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog
                  v-model="dialogAdd"
                  max-width="500px"
              >
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Add Game</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedGame.name"
                              label="Game name"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-select
                              :items="gamePlatform"
                              v-model="editedGame.platform"
                              label="Platform"
                          ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-select
                              :items="gameGenre"
                              v-model="editedGame.genre"
                              label="genre"
                          ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-rating
                              color="#16a085"
                              v-model="editedGame.rating"
                              label="Rating"
                          ></v-rating>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="grey"
                        text
                        @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                        color="green"
                        text
                        @click="addGame()"
                    >
                      Add Game
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="grey" text @click="close">Cancel</v-btn>
                    <v-btn color="red" text @click="deleteGame">OK</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogUpdateRating" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">Rate the Game</v-card-title>
                  <v-card-text>
                    <v-rating color="#16a085" v-model="updateRate"></v-rating>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="grey" text @click="close">Cancel</v-btn>
                    <v-btn color="green" text @click="editRating()">Update</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
                small
                class="mr-2"
                @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
            <v-icon
                small
                class="mr-2"
                @click="rateItem(item)">
              mdi-star
            </v-icon>
          </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-pagination
              color="#16a085"
              v-model="page"
              :length="pageCount"
          ></v-pagination>
        </div>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import Gameservice from "@/services/Gameservice";

export default {
  name: "Viewgame",
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
    dialogEdit: false,
    dialogAdd: false,
    dialogDelete: false,
    dialogUpdateRating: false,
    headers: [
      {text: 'ID', align: 'start', sortable: false, value: 'id',},
      {text: 'Game Name', value: 'name'},
      {text: 'Platform', value: 'platform'},
      {text: 'Genre', value: 'genre'},
      {text: 'Rating', value: 'rating'},
      {text: 'Actions', value: 'actions', sortable: false},
    ],
    gamePlatform: [],
    game: [],
    gameGenre: [],
    updateRate: 0,
    editedGame: {
      name: '',
      platform: "",
      genre: "",
      rating: 0,
    },

  }),

  created() {
    this.getGames()
    this.getGenre()
    this.getPlattform()
  },

  methods: {
    getPlattform() {
      Gameservice.getPlattform().then((response) => {
        this.gamePlatform = response.data;
      })
    },
    getGames() {
      Gameservice.getGame().then((response) => {
        this.game = response.data;

      });
    },
    getGenre() {
      Gameservice.getGenre().then((response) => {
        this.gameGenre = response.data;
      })
    }
    ,
    editItem(item) {
      this.gameIndex = item.id
      this.editedGame = Object.assign({}, item)
      this.dialogEdit = true
    },
    rateItem(item) {
      this.gameIndex = item.id
      this.dialogUpdateRating = true
    },
    deleteItem(item) {
      this.gameIndex = item.id
      this.dialogDelete = true
    },

    editGame() {
      let editGame = {
        name: this.editedGame.name,
        platform: this.editedGame.platform,
        genre: this.editedGame.genre,
        rating: this.editedGame.rating
      }
      Gameservice.updateGame(this.gameIndex, editGame)
      this.dialogEdit = false
      this.updatePage()
    },

    deleteGame() {
      console.log(this.gameIndex)
      Gameservice.deleteGame(this.gameIndex)
      this.dialogDelete = false;
      this.updatePage()
    },

    close() {
      this.dialogEdit = false
      this.dialogAdd = false
      this.dialogDelete = false
      this.dialogUpdateRating = false
    },

    editRating() {
      let game = {
        name: 'Dummy',
        platform: 'PS5',
        genre: 'Action',
        rating: this.updateRate
      }
      Gameservice.updateRating(this.gameIndex, game)
      this.dialogUpdateRating = false
      this.updatePage()

    },

    addGame() {
      let game = {
        name: this.editedGame.name,
        platform: this.editedGame.platform,
        genre: this.editedGame.genre,
        rating: this.editedGame.rating
      }
      Gameservice.addGame(game)
      this.dialogAdd = false
      this.updatePage()
    },

    updatePage() {
      window.location.reload()
    }

  },


}
</script>

<style scoped>
.test{
  border-radius: 20px;
}
.picture {
  background: url("../assets/gaming.jpg") no-repeat center center fixed;
  background-size: cover;
  position: static;
}
</style>