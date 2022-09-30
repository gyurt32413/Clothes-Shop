<template>
  <Spinner v-if="isLoading === true" />
  <clothing-page :women-clothes="womenClothes" v-else />
</template>

<script>
import googleSheet from "../apis/googleSheet";
import clothingPage from "../components/ClothingPage.vue";
import Spinner from "../components/Spinner.vue"

export default {
  data() {
    return {
      womenClothes: [],
      isLoading: false
    };
  },
  components: {
    clothingPage,
    Spinner
  },
  created() {
    this.getWomenClothes();
  },
  methods: {
    async getWomenClothes() {
      this.isLoading = true
      try {
        const { data } = await googleSheet.getClothes('women');
        // 將取得的資料整理為物件格式
        data.values.forEach((element) => {
          const clothes = {
            id: element[0],
            name: element[1],
            price: element[2],
            picture: element[3],
            product_img: element[4],
          };
          this.womenClothes.push(clothes);
        });
        this.isLoading = false
      } catch (error) {
        console.log(error);
        this.isLoading = false
      }
    },
  },
};
</script>
