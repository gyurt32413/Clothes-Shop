<template>
  <div class="main-container">
    <sideNavBar />
    <div class="product-container">
      <section class="banner">
        <a href="#">
          <img
            class="banner-img"
            :src="bannerImg[currentPage]"
            alt="banner-img"
          />
        </a>
      </section>
      <section class="product-card">
        <router-link
          v-for="item in clothes"
          :to="'/product/' + item.id"
          class="card-wrapper"
        >
          <img :src="item.picture" alt="card-img" class="card-img" />
          <div class="card-footer">
            <div class="product-name">{{ item.name }}</div>
            <div class="product-price">NT$ {{ item.price }}</div>
          </div>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
import sideNavBar from "./SideNavBar.vue";

export default {
  components: {
    sideNavBar,
  },
  props: {
    womenClothes: {
      type: Object,
    },
    menClothes: {
      type: Object,
    },
    kidsClothes: {
      type: Object,
    },
    sportsClothes: {
      type: Object,
    },
  },
  data() {
    return {
      clothes: {},
      bannerImg: {
        women:
          "https://s3.lativ.com.tw/i/NewArrivalBanner/56222_1010X400_220808_TW_0.jpg",
        men: "https://s3.lativ.com.tw/i/NewArrivalBanner/58133_1010X400_220905_TW.jpg",
        kids: "https://s3.lativ.com.tw/i/NewArrivalBanner/59242_1010X400_220905_TW.jpg",
        sports:
          "https://s3.lativ.com.tw/i/NewArrivalBanner/56701_1010X400_220829_TW.jpg",
      },
      //根據不同Page顯示不同的banner
      currentPage: "",
    };
  },
  created() {
    this.getClothesInfo();
    this.currentPage = this.$route.name;
  },
  methods: {
    getClothesInfo() {
      if (this.womenClothes) this.clothes = this.womenClothes;
      if (this.menClothes) this.clothes = this.menClothes;
      if (this.kidsClothes) this.clothes = this.kidsClothes;
      if (this.sportsClothes) this.clothes = this.sportsClothes;
    },
    setProductInfo() {},
  },
};
</script>

<style scoped lang="scss">
@import "../assets/SCSS/ClothingPage.scss";
</style>
