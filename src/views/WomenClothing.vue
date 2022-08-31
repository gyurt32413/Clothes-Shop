<template>
  <div class="main-container">
    <clothing-page :women-clothes="womenClothes" />
  </div>
</template>

<script>

import googleSheet from "../apis/googleSheet";
import clothingPage from "../components/ClothingPage.vue";

export default {
  data() {
    return {
      womenClothes: [],
    };
  },
  components: {
    clothingPage,
  },
  created() {
    this.getWomenClothes();
  },
  methods: {
    async getWomenClothes() {
      try {
        const { data } = await googleSheet.getWomenClothes();
        // 將取得的資料整理為物件格式
        data.values.forEach((element) => {
          const clothes = {
            id: element[0],
            name: element[1],
            price: element[2],
            picture: element[3],
            color: element[4].split(","),
            color_img: element[5].split(","),
            product_color_img: element[6].split(","),
          };
          this.womenClothes.push(clothes);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
  .main-container {
  width: 90%;
  position: relative;
  margin: 20px auto;
  display: flex;
}
</style>