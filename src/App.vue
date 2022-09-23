<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <RouterLink class="logo-title" to="/">Vite</RouterLink>
      </div>
      <input type="checkbox" name="nav-checkbok" id="nav-checkbok" />
      <label for="nav-checkbok">
        <div class="hamburger"></div>
      </label>
      <ul class="nav">
        <li class="menu_men menu">
          <RouterLink class="menu-link" to="/men">MEN</RouterLink>
        </li>
        <li class="menu_women menu">
          <RouterLink class="menu-link" to="/women">WOMEN</RouterLink>
        </li>
        <li class="menu_kids menu">
          <RouterLink class="menu-link" to="/kids">KIDS</RouterLink>
        </li>
        <li class="menu_sport menu">
          <RouterLink class="menu-link" to="/sports">SPORTS</RouterLink>
        </li>
      </ul>
      <RouterLink to="/checkout" class="shopping-cart">
        <img
          src="https://net.wimg.tw//templates/net/images/bag-icon.svg"
          alt="cart-icon"
        />
        <span class="cart-items-count">{{ itemNum }}</span>
      </RouterLink>
      <div class="cart-item-list">
        <table>
          <thead>
            <tr>
              <td style="width: 150px">商品名稱</td>
              <td style="width: 60px">顏色</td>
              <td style="width: 60px">尺寸</td>
              <td style="width: 60px">數量</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in $store.state.cartItems" :key="item.id">
              <td>
                <RouterLink
                  style="color: rgb(56, 20, 0)"
                  :to="'/product/' + item.id"
                  >{{ item.name }}</RouterLink
                >
              </td>
              <td>{{ item.color }}</td>
              <td>{{ item.size }}</td>
              <td>{{ item.num }}</td>
            </tr>
          </tbody>
        </table>
        <RouterLink to="/checkout">
          <button>前往結帳</button>
        </RouterLink>
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="footer-container">
      <ul class="footer-top">
        <li class="footer-item">
          <a class="footer-link" href="#">聯絡Vite</a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">購物說明</a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">最新消息</a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">品牌日誌</a>
        </li>
      </ul>
      <ul class="footer-bottom">
        <li class="footer-item">
          <a class="footer-link" href="#">網站使用條款</a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">隱私權政策</a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">免責聲明</a>
        </li>
      </ul>
      <div class="copyright">
        <span class="copyright-word"
          >COPYRIGHT@Vite CO.,LTD.ALL RIGHTS RESERVED.</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  computed: {
    itemNum() {
      return this.$store.state.cartItems.length;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/SCSS/css-reset.scss";
@import "./assets/SCSS/App.scss";
</style>