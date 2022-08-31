import axios from "axios";

export default {
  getWomenClothes() {
    return axios.get(
      "https://sheets.googleapis.com/v4/spreadsheets/1ViK6LFXot5uouK2HNlpKohT0mtli1rYrSV2woeVkvTM/values/women!A2:G?alt=json&key=AIzaSyAe-zDjqngmdcB2SlOctNzf8RJWuBj--xU"
    );
  },
};
