<template>
  <div class="cart-checking">
    <div class="cart-items">
      <div class="selected-all">
        <input id="all" type="checkbox" />
        <label for="all"></label>
        <span>全選</span>
      </div>
      <div class="cart-item">
        <div class="cart-item-left">
          <input id="1" type="checkbox" />
          <label for="1"></label>
          <img
            src="https://s.lativ.com.tw/i/56351/56351031/5635103_360.jpg"
            alt="item-img"
            class="item-img"
          />
          <div class="item-info">
            <div class="item-name">棉質直筒工作褲-男</div>
            <label for="style-toggle" class="item-style">黑色-S</label>
            <input type="checkbox" id="style-toggle" />
            <div class="style-selected">
              <div class="color-list">
                <span>顏色</span>
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
                <span>尺碼</span>
                <div class="size">S</div>
                <div class="size">M</div>
                <div class="size">L</div>
                <div class="size">XL</div>
              </div>
              <button class="style-confirmation">確定</button>
            </div>
          </div>
        </div>
        <div class="cart-item-right">
          <div class="item-num">
            <font-awesome-icon
              class="num-btn"
              icon="fa-solid fa-circle-minus"
            />
            <span class="num">0</span>
            <font-awesome-icon class="num-btn" icon="fa-solid fa-circle-plus" />
          </div>
          <div class="item-price">$ 80</div>
          <div class="item-deleted">✖</div>
        </div>
      </div>
    </div>
  </div>
  <div class="price-counting">
    <div class="purchase-num">共1件商品</div>
    <div class="product-price">
      <span>商品金額</span>
      <span>$ 490</span>
    </div>
    <div class="shipping-fee">
      <span>運費</span>
      <span>$ 0</span>
    </div>
    <div class="free-shipping">
      消費滿 $500 免運費，尚差<span style="color: red">$299元</span
      >即可享有免運優惠。
    </div>
    <div class="discount">
      <span>帳戶扣抵</span>
      <span>$ 0</span>
    </div>
    <div class="total-price">
      <span>小計</span>
      <span>NT$ 450</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/SCSS/StepOne.scss";
</style>