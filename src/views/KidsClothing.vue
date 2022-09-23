<template>
  <clothing-page :kids-clothes="kidsClothes" />
</template>

<script>
import googleSheet from "../apis/googleSheet";
import clothingPage from "../components/ClothingPage.vue";

export default {
  data() {
    return {
      kidsClothes: [],
    };
  },
  components: {
    clothingPage,
  },
  created() {
    this.getKidsClothes();
  },
  methods: {
    async getKidsClothes() {
      try {
        const { data } = await googleSheet.getClothes("kids");
        // 將取得的資料整理為物件格式
        data.values.forEach((element) => {
          const clothes = {
            id: element[0],
            name: element[1],
            price: element[2],
            picture: element[3],
            product_img: element[4],
          };
          this.kidsClothes.push(clothes);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>