<template>
  <clothing-page :men-clothes="menClothes" />
</template>

<script>
import googleSheet from "../apis/googleSheet";
import clothingPage from "../components/ClothingPage.vue";

export default {
  data() {
    return {
      menClothes: [],
    };
  },
  components: {
    clothingPage,
  },
  created() {
    this.getMenClothes();
  },
  methods: {
    async getMenClothes() {
      try {
        const { data } = await googleSheet.getClothes("men");
        // 將取得的資料整理為物件格式
        data.values.forEach((element) => {
          const clothes = {
            id: element[0],
            name: element[1],
            price: element[2],
            picture: element[3],
            product_img: element[4],
          };
          this.menClothes.push(clothes);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>