<template>
  <div class="main-container">
    <div class="step-wrapper">
      <div
        :class="[
          'step',
          { 'completed-step': currentStep === 2 || currentStep === 3 },
          { 'current-step': currentStep === 1 },
        ]"
      >
        <div class="circle">1</div>
        <div class="step-description">確認購物車</div>
        <div class="step-line"></div>
      </div>
      <div
        :class="[
          'step',
          { 'completed-step': currentStep === 3 },
          { 'current-step': currentStep === 2 },
        ]"
      >
        <div class="circle">2</div>
        <div class="step-description">填寫資料</div>
        <div class="step-line"></div>
      </div>
      <div :class="['step', { 'current-step': currentStep === 3 }]">
        <div class="circle">3</div>
        <div class="step-description">完成訂購</div>
      </div>
    </div>
    <div v-if="$store.state.cartItems.length" class="processing-container">
      <div @click="hiddenStyle">
        <StepOne
          @checkedItems="getCheckedItems"
          ref="stepOne"
          v-if="currentStep === 1"
        />
        <StepTwo
          :checked-items="checkedItems"
          :checkout-info="checkoutInfo"
          ref="stepTwo"
          v-else-if="currentStep === 2"
        />
        <StepThree v-else />
      </div>

      <div class="button-wrapper">
        <RouterLink v-if="currentStep !== 2" to="/">
          <button class="secondary-btn">繼續購物</button>
        </RouterLink>
        <button v-else @click="previousStep" class="secondary-btn">
          上一步
        </button>
        <button
          v-if="currentStep === 1"
          @click="
            getCheckoutInfo();
            nextStep();
          "
          class="primary-btn"
          :disabled="!checkedItems.length"
        >
          下一步
        </button>
        <button
          v-if="currentStep === 2"
          @click="hendleSubmit()"
          class="primary-btn"
        >
          送出
        </button>
      </div>
    </div>
    <div v-else class="no-items">
      <img
        src="https://s4.lativ.com.tw/images/icon/icon_blank_cart.png"
        style="width: 100px"
        alt="cart-img"
      />
      <div class="description">你的購物車沒有商品</div>
      <RouterLink to="/">
        <button class="secondary-btn">去購物</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import StepOne from "../components/StepOne.vue";
import StepTwo from "../components/StepTwo.vue";
import StepThree from "../components/StepThree.vue";
import swal from "sweetalert";
export default {
  components: {
    StepOne,
    StepTwo,
    StepThree,
  },
  data() {
    return {
      currentStep: 1,
      checkedItems: [],
      checkoutInfo: {},
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep === 1) {
        this.currentStep += 1;
      }
      window.scroll(0, 0);
    },
    previousStep() {
      if (this.currentStep === 2 || this.currentStep === 3) {
        this.currentStep -= 1;
      }
      window.scroll(0, 0);
    },
    async hendleSubmit() {
      //判斷stepTwo的表單驗證是否通過
      const result = await this.$refs.stepTwo.submitForm();
      if (result) {
        this.currentStep += 1;
      } else {
        swal({
          text: "請確認所有資料填寫無誤",
          icon: "error",
        });
      }
    },
    getCheckedItems(val) {
      //取得要結帳的商品資料傳至step2
      this.checkedItems = val;
    },
    getCheckoutInfo() {
      //取得結帳資訊傳至step2
      const stepOne = this.$refs.stepOne;
      if (this.currentStep === 1) {
        this.checkoutInfo = {
          checkedProductNum: stepOne.checkedProductNum,
          checkedProductPrice: stepOne.checkedProductPrice,
          shippingFee: stepOne.shippingFee,
          discount: stepOne.discount,
          totalCost: stepOne.totalCost,
        };
      }
    },
    hiddenStyle(el) {
      //點擊商品款式其他位置可以關閉
      if (this.$store.state.cartItems.length && this.currentStep === 1) {
        if (
          !el.target.closest(".style-selected") &&
          el.target.className !== "item-style"
        ) {
          this.$refs.stepOne.currentEditedItem = {};
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/SCSS/CheckoutPage.scss";
</style>