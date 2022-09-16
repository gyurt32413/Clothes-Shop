<template>
  <div class="main-container">
    <div class="step-wrapper">
      <div class="step step-one">
        <div class="circle">1</div>
        <div class="step-description">確認購物車</div>
      </div>
      <div class="step step-two">
        <div class="circle">2</div>
        <div class="step-description">填寫資料</div>
      </div>
      <div class="step step-three">
        <div class="circle">3</div>
        <div class="step-description">完成訂購</div>
      </div>
    </div>
    <div class="processing-container">
      <StepOne v-if="currentStep === 1" />
      <StepTwo v-else-if="currentStep === 2" />

      <section class="orderer-information"></section>
      <section class="order-completing"></section>
      <div class="button-wrapper">
        <button @click="previousStep" class="secondary-btn">繼續購物</button>
        <button @click="nextStep" class="primary-btn">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import StepOne from "../components/StepOne.vue";
import StepTwo from "../components/StepTwo.vue";
export default {
  components: {
    StepOne,
    StepTwo,
  },
  data() {
    return {
      currentStep: 1,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep === 1 || this.currentStep === 2) {
        this.currentStep += 1;
      }
    },
    previousStep() {
      if (this.currentStep === 2 || this.currentStep === 3) {
        this.currentStep -= 1;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/SCSS/CheckoutPage.scss";
</style>