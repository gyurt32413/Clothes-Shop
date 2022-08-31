<template>
  <div class="main-container">
    <sideNavBar />
    <div class="product-container">
      <section class="banner">
        <a href="#">
          <img
            class="banner-img"
            src="https://s3.lativ.com.tw/i/NewArrivalBanner/56222_1010X400_220808_TW_0.jpg"
            alt="banner-img"
          />
        </a>
      </section>
      <section class="product-card">
        <router-link to="/product" v-for="item in clothes" class="card-wrapper">
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
      required: true,
    },
  },
  data() {
    return {
      clothes: {},
    };
  },
  created() {
    this.clothes = this.womenClothes;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/SCSS/ClothingPage.scss";
</style>
