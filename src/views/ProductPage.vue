<template>
  <div class="main-container">
    <sideNavBar />
    <div class="product-container">
      <section class="product-info">
        <div class="product-img">
          <img
            src="https://s.lativ.com.tw/i/58120/58120021/5812002_500.jpg"
            alt="product-img"
            id="productImg"
          />
        </div>
        <div class="info-container">
          <div class="info-top">
            <div class="product-name">絲光棉寬鬆船領七分袖上衣-女</div>
            <div class="price">
              <span class="price-num">500</span>
            </div>
          </div>
          <div class="info-middle">
            <div class="colorlist">
              <img
                src="https://s4.lativ.com.tw/i/58120/58120011/5812001_48.jpg"
                alt="white"
                class="color-img"
              />
              <img
                src="https://s3.lativ.com.tw/i/58120/58120021/5812002_48.jpg"
                alt="white"
                class="color-img"
              />
              <img
                src="https://s4.lativ.com.tw/i/58120/58120031/5812003_48.jpg"
                alt="white"
                class="color-img"
              />
              <img
                src="https://s3.lativ.com.tw/i/58120/58120041/5812004_48.jpg"
                alt="white"
                class="color-img"
              />
              <img
                src="https://s4.lativ.com.tw/i/58120/58120051/5812005_48.jpg"
                alt="white"
                class="color-img"
              />
            </div>
            <div class="size-list">
              <span class="size">S</span>
              <span class="size">M</span>
              <span class="size">L</span>
              <span class="size">XL</span>
            </div>
          </div>
          <div class="info-bottom">
            <div class="add-cart">
              <div class="purchase-num">
                <span style="margin-right: 5px; font-size: 12px">數量</span>
                <font-awesome-icon
                  class="num-btn"
                  icon="fa-solid fa-circle-minus"
                />
                <span class="num">0</span>
                <font-awesome-icon
                  class="num-btn"
                  icon="fa-solid fa-circle-plus"
                />
              </div>
              <button class="addCartBtn">加入購物車</button>
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
            src="https://s.lativ.com.tw/i/58120/5812004_A_01.jpg"
            alt="product-img "
          />
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
import sideNavBar from "../components/SideNavBar.vue";

export default {
  components: {
    sideNavBar,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/SCSS/ProductPage.scss";
</style>
