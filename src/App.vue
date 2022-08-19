<template>
  <header>
    <div class="logo">
      <RouterLink class="logo-title" to="/">Vite</RouterLink>
    </div>
    <input type="checkbox" name="nav-checkbok" id="nav-checkbok" />
    <label for="nav-checkbok">
      <div class="hamburger"></div>
    </label>
    <ul class="nav">
      <li class="menu_men menu">
        <RouterLink class="menu-link" to="/man">MEN</RouterLink>
      </li>
      <li class="menu_women menu">
        <RouterLink class="menu-link" to="/">WOMEN</RouterLink>
      </li>
      <li class="menu_kids menu">
        <RouterLink class="menu-link" to="/">KIDS</RouterLink>
      </li>
      <li class="menu_sport menu">
        <RouterLink class="menu-link" to="/">SPORTS</RouterLink>
      </li>
    </ul>
    <div class="shopping-cart">
      <img
        src="https://net.wimg.tw//templates/net/images/bag-icon.svg"
        alt="cart-icon"
      />
      <span class="cart-items-count">3</span>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
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
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
</script>

<style lang="scss">
@import "./assets/SCSS/css-reset.scss";
@import "./assets/SCSS/App.scss";
</style>
