<template>
  <Spinner v-if="isLoading === true" />
  <div v-else class="main-container">
    <sideNavBar />
    <div class="product-container">
      <section class="product-info">
        <div class="product-img">
          <img :src="product.product_img" alt="product-img" id="productImg" />
        </div>
        <div class="info-container">
          <div class="info-top">
            <div class="product-name">
              {{ product.name }} ({{ color }}-{{ size }})
            </div>
            <div class="price">
              <span class="price-num">{{ product.price }}</span>
            </div>
          </div>
          <div class="info-middle">
            <div class="colorlist">
              <img
                @click="changeColor('白色')"
                src="https://s4.lativ.com.tw/i/58120/58120011/5812001_48.jpg"
                alt="白色"
                :class="['color-img', { 'color-selected': color === '白色' }]"
              />
              <img
                @click="changeColor('粉色')"
                src="https://s3.lativ.com.tw/i/58120/58120021/5812002_48.jpg"
                alt="粉色"
                :class="['color-img', { 'color-selected': color === '粉色' }]"
              />
              <img
                @click="changeColor('酒紅')"
                src="https://s4.lativ.com.tw/i/58120/58120031/5812003_48.jpg"
                alt="酒紅"
                :class="['color-img', { 'color-selected': color === '酒紅' }]"
              />
              <img
                @click="changeColor('棕色')"
                src="https://s3.lativ.com.tw/i/58120/58120041/5812004_48.jpg"
                alt="棕色"
                :class="['color-img', { 'color-selected': color === '棕色' }]"
              />
              <img
                @click="changeColor('綠色')"
                src="https://s4.lativ.com.tw/i/58120/58120051/5812005_48.jpg"
                alt="綠色"
                :class="['color-img', { 'color-selected': color === '綠色' }]"
              />
            </div>
            <div class="size-list">
              <span
                @click="changeSize('S')"
                :class="['size', { 'size-selected': size === 'S' }]"
                >S</span
              >
              <span
                @click="changeSize('M')"
                :class="['size', { 'size-selected': size === 'M' }]"
                >M</span
              >
              <span
                @click="changeSize('L')"
                :class="['size', { 'size-selected': size === 'L' }]"
                >L</span
              >
              <span
                @click="changeSize('XL')"
                :class="['size', { 'size-selected': size === 'XL' }]"
                >XL</span
              >
            </div>
          </div>
          <div class="info-bottom">
            <div class="add-cart">
              <div class="purchase-num">
                <span style="margin-right: 5px; font-size: 12px">數量</span>
                <button @click="minusNum" class="num-btn">
                  <font-awesome-icon icon="fa-solid fa-circle-minus" />
                </button>
                <input
                  class="num"
                  v-model="num"
                  type="text"
                  maxlength="2"
                  oninput="value=value.replace(/^0|[^\d]/g, '')"
                />
                <button @click.stop="addNum" class="num-btn">
                  <font-awesome-icon icon="fa-solid fa-circle-plus" />
                </button>
              </div>
              <button @click="addToCart" class="addCartBtn">加入購物車</button>
            </div>
            <div class="activity">
              <span>APP獨享！超取滿680免運費</span>
            </div>
          </div>
        </div>
      </section>
      <section class="product-introduce">
        <div class="img-container">
          <img
            src="https://s4.lativ.com.tw/i/58120/58120_D_11.jpg"
            alt="product-img"
          />
          <img
            src="https://s1.lativ.com.tw/i/CommonPicture/2624/100_TW_0.jpg"
            alt="product-img"
          />
          <img
            src="https://s2.lativ.com.tw/i/58120/58120_D_12.jpg"
            alt="product-img"
          />
          <img
            src="https://s3.lativ.com.tw/i/CommonPicture/2030/ITS_TW_G2.jpg"
            alt="product-img"
          />
        </div>
        <ul class="text-container">
          <li>商品產地 柬埔寨製</li>
          <li>商品材質 100%棉</li>
          <li>
            洗滌方式 ※ 建議放入洗衣袋中清洗，深淺色需分開，以避免染色問題。※
            衣物洗滌方式請參考商品洗標。
          </li>
          <li>商品尺寸 (單位:cm)</li>
          <table class="size-table">
            <thead>
              <tr>
                <th scope="row">尺寸</th>
                <th scope="col">S</th>
                <th scope="col">M</th>
                <th scope="col">L</th>
                <th scope="col">XL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">胸圍</th>
                <td>52</td>
                <td>54.5</td>
                <td>58</td>
                <td>61</td>
              </tr>
              <tr>
                <th scope="row">袖長</th>
                <td>38.5</td>
                <td>39.5</td>
                <td>40.5</td>
                <td>41.5</td>
              </tr>
              <tr>
                <th scope="row">衣長</th>
                <td>67.5</td>
                <td>70</td>
                <td>72.5</td>
                <td>75</td>
              </tr>
            </tbody>
          </table>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import googleSheet from "../apis/googleSheet";
import sideNavBar from "../components/SideNavBar.vue";
import swal from "sweetalert";
import Spinner from "../components/Spinner.vue";

export default {
  data() {
    return {
      product: {},
      size: "S",
      color: "白色",
      num: 1,
      isLoading: false,
    };
  },
  components: {
    sideNavBar,
    Spinner,
  },
  created() {
    this.getProductInfo(this.$route.params.id);
  },
  watch: {
    //當產品頁的id變動時需重新取得產品資料
    $route(newVal, oldVal) {
      if (newVal.name === "product" && newVal.params.id !== oldVal.params.id) {
        this.getProductInfo(this.$route.params.id);
      }
    },
  },
  methods: {
    async getProductInfo(id) {
      this.isLoading = true;
      try {
        const { data } = await googleSheet.getProductInfo(id);
        const item = data.values[0];
        this.product = {
          id: item[0],
          name: item[1],
          price: item[2],
          product_img: item[4],
        };
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        swal({
          text: "無法取得商品資料，請稍後再試",
          icon: "error",
        });
        this.isLoading = false;
      }
    },
    changeColor(color) {
      this.color = color;
    },
    changeSize(size) {
      this.size = size;
    },
    addNum() {
      this.num++;
    },
    minusNum() {
      if (this.num > 1) this.num--;
    },
    addToCart() {
      const cartItem = {
        ...this.product,
        size: this.size,
        color: this.color,
        num: this.num,
        // 用來區別同ID但不同款式的商品
        cartItemId: this.product.id + this.size + this.color,
      };
      this.$store.commit("setCartItems", cartItem);
      swal({
        text: "成功將商品加入至購物車!",
        icon: "success",
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/SCSS/ProductPage.scss";
</style>
