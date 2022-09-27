<template>
  <div class="cart-checking">
    <div class="cart-items">
      <div class="selected-all">
        <input v-model="checkedAll" id="all" type="checkbox" />
        <label for="all"></label>
        <span>全選</span>
      </div>
      <div v-for="item in cartItems" :key="item.cartItemId" class="cart-item">
        <div class="cart-item-left">
          <input
            v-model="item.checked"
            :id="'item-toggle' + item.cartItemId"
            type="checkbox"
          />
          <label :for="'item-toggle' + item.cartItemId"></label>
          <RouterLink @click.stop="" :to="'/product/' + item.id">
            <img :src="item.product_img" alt="item-img" class="item-img" />
          </RouterLink>
          <div class="item-info">
            <RouterLink @click.stop="" :to="'/product/' + item.id">
              <div class="item-name">{{ item.name }}</div>
            </RouterLink>
            <button @click="getCurrentEditedItem(item)" class="item-style">
              {{ item.color }}-{{ item.size }}
            </button>
            <div
              v-show="currentEditedItem.cartItemId === item.cartItemId"
              class="style-selected"
            >
              <div class="color-list">
                <span>顏色</span>
                <img
                  src="https://s4.lativ.com.tw/i/58120/58120011/5812001_48.jpg"
                  alt="白色"
                  :class="[
                    'color-img',
                    { 'color-selected': currentEditedItem.color === '白色' },
                  ]"
                  @click="changeCurrentColor('白色')"
                />
                <img
                  src="https://s3.lativ.com.tw/i/58120/58120021/5812002_48.jpg"
                  alt="粉色"
                  :class="[
                    'color-img',
                    { 'color-selected': currentEditedItem.color === '粉色' },
                  ]"
                  @click="changeCurrentColor('粉色')"
                />
                <img
                  src="https://s4.lativ.com.tw/i/58120/58120031/5812003_48.jpg"
                  alt="酒紅"
                  :class="[
                    'color-img',
                    { 'color-selected': currentEditedItem.color === '酒紅' },
                  ]"
                  @click="changeCurrentColor('酒紅')"
                />
                <img
                  src="https://s3.lativ.com.tw/i/58120/58120041/5812004_48.jpg"
                  alt="棕色"
                  :class="[
                    'color-img',
                    { 'color-selected': currentEditedItem.color === '棕色' },
                  ]"
                  @click="changeCurrentColor('棕色')"
                />
                <img
                  src="https://s4.lativ.com.tw/i/58120/58120051/5812005_48.jpg"
                  alt="綠色"
                  :class="[
                    'color-img',
                    { 'color-selected': currentEditedItem.color === '綠色' },
                  ]"
                  @click="changeCurrentColor('綠色')"
                />
              </div>
              <div class="size-list">
                <span>尺碼</span>
                <button
                  @click="changeCurrentSize('S')"
                  :class="[
                    'size',
                    { 'size-selected': currentEditedItem.size === 'S' },
                  ]"
                >
                  S
                </button>
                <button
                  @click="changeCurrentSize('M')"
                  :class="[
                    'size',
                    { 'size-selected': currentEditedItem.size === 'M' },
                  ]"
                >
                  M
                </button>
                <button
                  @click="changeCurrentSize('L')"
                  :class="[
                    'size',
                    { 'size-selected': currentEditedItem.size === 'L' },
                  ]"
                >
                  L
                </button>
                <button
                  @click="changeCurrentSize('XL')"
                  :class="[
                    'size',
                    { 'size-selected': currentEditedItem.size === 'XL' },
                  ]"
                >
                  XL
                </button>
              </div>
              <button
                @click="updateCartItems(item.cartItemId)"
                class="style-confirmation"
              >
                確定
              </button>
            </div>
          </div>
        </div>
        <div class="cart-item-right">
          <div class="item-num">
            <button
              :disabled="item.num === 1"
              @click="minusProductNum(item.cartItemId)"
            >
              <font-awesome-icon
                class="num-btn"
                icon="fa-solid fa-circle-minus"
              />
            </button>
            <span class="num">{{ item.num }}</span>
            <button @click="addProductNum(item.cartItemId)">
              <font-awesome-icon
                class="num-btn"
                icon="fa-solid fa-circle-plus"
              />
            </button>
          </div>
          <div class="item-price">$ {{ item.price }}</div>
          <div @click="deleteItem(item.cartItemId)" class="item-deleted">✖</div>
        </div>
      </div>
    </div>
  </div>
  <div class="price-counting">
    <div @click="test" class="purchase-num">
      共 {{ checkedProductNum }} 件商品
    </div>
    <div class="product-price">
      <span>商品金額</span>
      <span>$ {{ moneyStyle(checkedProductPrice) }}</span>
    </div>
    <div class="shipping-fee">
      <span>運費</span>
      <span>$ {{ shippingFee }}</span>
    </div>
    <div class="free-shipping">
      消費滿 $500 免運費，
      <span v-if="freeShippingThreshold > 0">
        尚差<span style="color: red">${{ freeShippingThreshold }}元</span
        >即可享有免運優惠。
      </span>
      <span v-else>已達免運門檻。</span>
    </div>
    <div class="discount">
      <span>帳戶扣抵</span>
      <span>$ 0</span>
    </div>
    <div class="total-price">
      <span>小計</span>
      <span>NT$ {{ moneyStyle(totalCost) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["checkedItems"],
  data() {
    return {
      cartItems: [],
      currentEditedItem: {},
      discount: 0,
    };
  },
  created() {
    this.cartItems = this.$store.state.cartItems.map((item) => ({
      ...item,
      checked: true,
    }));
  },
  computed: {
    unCheckedItems() {
      return this.cartItems.filter((item) => !item.checked);
    },
    checkedAll: {
      get() {
        return this.unCheckedItems.length === 0;
      },
      set(value) {
        console.log(value);
        this.cartItems = this.cartItems.map((item) => ({
          ...item,
          checked: value,
        }));
      },
    },
    checkedProductNum() {
      let totalNum = 0;
      this.cartItems.forEach((item) => {
        if (item.checked) {
          totalNum += item.num;
        }
      });
      return totalNum;
    },
    checkedProductPrice() {
      let totalPrice = 0;
      this.cartItems.forEach((item) => {
        if (item.checked) {
          totalPrice += item.price * item.num;
        }
      });
      return totalPrice;
    },
    shippingFee() {
      return this.checkedProductPrice >= 500 ? 0 : 60;
    },
    freeShippingThreshold() {
      return 500 - this.checkedProductPrice;
    },
    totalCost() {
      return this.checkedProductPrice + this.shippingFee + this.discount;
    },
  },
  watch: {
    cartItems: {
      handler: function () {
        this.$emit(
          "checkedItems",
          this.cartItems.filter((item) => item.checked)
        );
      },
      deep: true,
    },
  },
  methods: {
    getCurrentEditedItem(item) {
      //點擊相同地方有toggle效果
      if (this.currentEditedItem.id) {
        this.currentEditedItem = {};
        return;
      }
      this.currentEditedItem = { ...item };
    },
    changeCurrentColor(color) {
      this.currentEditedItem.color = color;
    },
    changeCurrentSize(size) {
      this.currentEditedItem.size = size;
    },
    updateCartItems(itemId) {
      this.cartItems = this.cartItems.map((item) => {
        if (item.cartItemId === itemId) {
          return { ...this.currentEditedItem };
        } else {
          return item;
        }
      });
      //更新至vuex
      this.$store.commit("updateCartItems", this.cartItems);
      //關閉style
      this.currentEditedItem = {};
    },
    addProductNum(itemId) {
      this.cartItems.forEach((item) => {
        if (item.cartItemId === itemId) {
          item.num += 1;
        }
      });
      //更新至vuex
      this.$store.commit("updateCartItems", this.cartItems);
    },
    minusProductNum(itemId) {
      this.cartItems.forEach((item) => {
        if (item.cartItemId === itemId) {
          item.num -= 1;
        }
      });
      //更新至vuex
      this.$store.commit("updateCartItems", this.cartItems);
    },
    deleteItem(itemId) {
      this.cartItems = this.cartItems.filter(
        (_item) => _item.cartItemId !== itemId
      );
      //更新至vuex
      this.$store.commit("updateCartItems", this.cartItems);
    },
    moneyStyle(num) {
      return num.toLocaleString();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/SCSS/StepOne.scss";
</style>