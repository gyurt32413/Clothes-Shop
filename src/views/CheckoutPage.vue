<template>
  <div @click="hiddenStyle" class="main-container">
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
      <div :class="[
          'step',
          { 'current-step': currentStep === 3 },
        ]">
        <div class="circle">3</div>
        <div class="step-description">完成訂購</div>
      </div>
    </div>
    <div class="processing-container">
      <StepOne ref="stepOne" v-if="currentStep === 1" />
      <StepTwo v-else-if="currentStep === 2" />
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
    hiddenStyle(el) {
      if (this.currentStep === 1) {
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