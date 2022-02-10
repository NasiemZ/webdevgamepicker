import axios from 'axios'


const GAME_API_BASE_URL = 'http://192.168.178.20:8081/api/games/'
const GENRE_API_BASE_URL = "http://192.168.178.20:8081/api/genre/"
const PLATFORM_API_BASE_URL = "http://192.168.178.20:8081/api/plattform/"
const RANDOM_API_BASE_URL = "http://192.168.178.20:8081/api/random/"


class Gameservice{
    getGame(){
        return axios.get(GAME_API_BASE_URL);
    }

    getGenre(){
        return axios.get(GENRE_API_BASE_URL);
    }

    getPlattform(){
        return axios.get(PLATFORM_API_BASE_URL);
    }

    addGame(newGame){
        return axios.post(GAME_API_BASE_URL,newGame);
    }

    deleteGame(gameID){
        return axios.delete(GAME_API_BASE_URL + gameID);
    }

    updateGame(gameID, newGame){
        return axios.put(GAME_API_BASE_URL + gameID,newGame);
    }
    updateRating(gameID,newGame){
        return axios.patch(GAME_API_BASE_URL+ gameID,newGame);
    }
    getRandom(){
        return axios.get(RANDOM_API_BASE_URL)
    }

}




export default new Gameservice()

