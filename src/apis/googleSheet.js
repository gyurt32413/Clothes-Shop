import axios from "axios";

export default {
  getClothes(data) {
    return axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/1ViK6LFXot5uouK2HNlpKohT0mtli1rYrSV2woeVkvTM/values/${data}!A2:E?alt=json&key=AIzaSyAe-zDjqngmdcB2SlOctNzf8RJWuBj--xU`
    );
  },
  getProductInfo(productId) {
    const sheetId = Number(productId) +1
    return axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/1ViK6LFXot5uouK2HNlpKohT0mtli1rYrSV2woeVkvTM/values/all!A${sheetId}:E${sheetId}?alt=json&key=AIzaSyAe-zDjqngmdcB2SlOctNzf8RJWuBj--xU`
    )
  }
};
