<template>
  <div class="orderer-information">
    <input id="cart-item-toggle" type="checkbox" />
    <div class="total-price">
      <span>本次消費總計</span>
      <span style="color: #c14948; font-size: 18px"
        >NT$ {{ moneyStyle(checkoutInfo.totalCost) }}</span
      >
    </div>
    <label for="cart-item-toggle" class="total-num">
      <span>總計 {{ checkoutInfo.checkedProductNum }} 件商品</span>
      <font-awesome-icon class="toggle-icon" icon="fa-solid fa-angle-right" />
    </label>
    <div id="hidden-cart">
      <div class="cart-checking">
        <div class="cart-items">
          <div v-for="item in checkedItems" :key="item.id" class="cart-item">
            <div class="cart-item-left">
              <img :src="item.product_img" alt="item-img" class="item-img" />
              <div class="item-info">
                <div class="item-name">{{ item.name }}</div>
                <label for="style-toggle" class="item-style"
                  >{{ item.color }}-{{ item.size }}</label
                >
              </div>
            </div>
            <div class="cart-item-right">
              <div class="item-num">
                <span class="num">{{ item.num }}件</span>
              </div>
              <div class="item-price">$ {{ moneyStyle(item.price) }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="price-counting">
        <div class="product-price">
          <span>商品金額</span>
          <span>$ {{ moneyStyle(checkoutInfo.checkedProductPrice) }}</span>
        </div>
        <div class="shipping-fee">
          <span>運費</span>
          <span>$ {{ checkoutInfo.shippingFee }}</span>
        </div>
        <div class="discount">
          <span>帳戶扣抵</span>
          <span>$ {{ checkoutInfo.discount }}</span>
        </div>
        <div class="total-price">
          <span>小計</span>
          <span>NT$ {{ moneyStyle(checkoutInfo.totalCost) }}</span>
        </div>
      </div>
    </div>
    <form>
      <div class="shipping-methods">
        <div class="form-title">付款與運送方式</div>
        <label class="shipping-method">
          <div v-show="wrongMessage('payment_shipping')" class="wrong-indicate">
            <span class="triangle">▲</span
            ><span class="message">{{ wrongMessage("payment_shipping") }}</span>
          </div>
          <input
            type="radio"
            name="shipping-method"
            value="7-11_pick-up-and-pay"
            v-model="formData.payment_shipping"
          />7-11取貨付款
        </label>
        <label class="shipping-method"
          ><input
            type="radio"
            name="shipping-method"
            value="creditCard_home-delivery"
            v-model="formData.payment_shipping"
          />線上刷卡-宅配</label
        >
        <label class="shipping-method"
          ><input
            type="radio"
            name="shipping-method"
            value="creditCard_7-11"
            v-model="formData.payment_shipping"
          />線上刷卡-7-11取貨 (請填真實姓名，超商將核對證件)</label
        >
      </div>
      <div class="recipient-info">
        <div class="form-title">收件人資訊</div>
        <label class="name">
          <div v-show="wrongMessage('name')" class="wrong-indicate">
            <span class="triangle">▲</span
            ><span class="message">{{ wrongMessage("name") }}</span>
          </div>
          <span>姓名</span>
          <input
            type="text"
            name="full-name"
            maxlength="15"
            placeholder="輸入姓名"
            v-model="formData.name"
          />
        </label>
        <label class="phone-number">
          <div v-show="wrongMessage('phone')" class="wrong-indicate">
            <span class="triangle">▲</span
            ><span class="message">{{ wrongMessage("phone") }}</span>
          </div>
          <span>手機號碼</span>
          <input
            type="tel"
            name="phone-number"
            maxlength="10"
            oninput="value=value.replace(/[^\d]/g,'')"
            placeholder="輸入有效手機號碼"
            v-model="formData.phone"
          />
        </label>
        <label v-if="shippingMethod === '7-11'" class="pick-up-store">
          <span>取件門市</span>
          <img
            src="https://s4.lativ.com.tw/images/icon_711.gif"
            alt="7-11_logo"
            class="7-11_logo"
            style="width: 30px; display: inline"
          />
          <div class="select-wrapper">
            <select
              v-model="formData.pickUpStore"
              class="store-info"
              name="store-info"
            >
              <option selected disabled value="">請選擇取件門市</option>
              <option value="870401水景門市">870401水景門市</option>
            </select>
            <font-awesome-icon
              class="toggle-icon"
              icon="fa-solid fa-angle-right"
            />
          </div>
        </label>
        <div v-if="shippingMethod === 'home-delivery'" class="address">
          <label class="pick-up-city">
            <span>請選擇縣市</span>
            <div class="select-wrapper">
              <select
                v-model="formData.city"
                required
                class="store-info"
                name="store-info"
              >
                <option selected disabled value="">請選擇縣市</option>
                <option
                  v-for="(city, index) in cities"
                  :key="city"
                  :value="city"
                >
                  {{ city }}
                </option>
              </select>
              <font-awesome-icon
                class="toggle-icon"
                icon="fa-solid fa-angle-right"
              />
            </div>
          </label>
          <label class="pick-up-district">
            <span>請選擇地區</span>
            <div class="select-wrapper">
              <select
                v-model="formData.district"
                required
                class="store-info"
                name="store-info"
              >
                <option selected disabled value="">請選擇地區</option>
                <option
                  v-for="(district, index) in districts"
                  :value="district.name"
                  :key="district"
                >
                  {{ district.name }}
                </option>
              </select>
              <font-awesome-icon
                class="toggle-icon"
                icon="fa-solid fa-angle-right"
              />
            </div>
          </label>
        </div>
        <label v-if="shippingMethod === 'home-delivery'" class="detail-address">
          <div v-if="wrongMessage('city')" class="wrong-indicate">
            <span class="triangle">▲</span
            ><span class="message">{{ wrongMessage("city") }}</span>
          </div>
          <div v-else-if="wrongMessage('district')" class="wrong-indicate">
            <span class="triangle">▲</span
            ><span class="message">{{ wrongMessage("district") }}</span>
          </div>
          <div v-else-if="wrongMessage('detailAddress')" class="wrong-indicate">
            <span class="triangle">▲</span
            ><span class="message">{{ wrongMessage("detailAddress") }}</span>
          </div>
          <input
            type="text"
            name="address"
            size="40"
            placeholder="請輸入地址"
            v-model="formData.detailAddress"
          />
        </label>
      </div>
      <div v-if="payingMethod === 'creditCard'" class="credit-card-info">
        <div class="form-title">信用卡資訊</div>
        <label class="card-number">
          <span>信用卡卡號</span>
          <div v-show="wrongMessage('cardNumber')" class="wrong-indicate">
            <span class="triangle">▲</span
            ><span class="message">{{ wrongMessage("cardNumber") }}</span>
          </div>
          <input
            type="tel"
            name="card-number"
            maxlength="19"
            placeholder="限使用台灣核發之信用卡"
            oninput="value = value.replace(/[^\d]/g, '')"
            @input="updateCardNumber"
            :value="formatCardNumber"
          />
        </label>
        <label class="due-date">
          <div v-if="wrongMessage('dueDate_MM')" class="wrong-indicate">
            <span class="triangle">▲</span
            ><span class="message">{{ wrongMessage("dueDate_MM") }}</span>
          </div>
          <div v-else-if="wrongMessage('dueDate_YY')" class="wrong-indicate">
            <span class="triangle">▲</span
            ><span class="message">{{ wrongMessage("dueDate_YY") }}</span>
          </div>
          <span>有效期限</span>
          <input
            v-model="formData.dueDate_MM"
            @input="focusNext"
            type="text"
            name="due-date"
            maxlength="2"
            placeholder="MM"
            class="card"
            oninput="value = value.replace(/[^\d]/g , '')"
          />
          <span class="slash">/</span>
          <input
            v-model="formData.dueDate_YY"
            type="text"
            name="due-date"
            maxlength="2"
            placeholder="YY"
            style="margin-left: 10px"
            class="card"
            oninput="value = value.replace(/[^\d]/g , '')"
            @input="focusNext"
          />
          <span style="margin-left: 100px">月份 / 年份</span>
        </label>
        <label class="last-three-num">
          <div v-show="wrongMessage('lastThreeNum')" class="wrong-indicate">
            <span class="triangle">▲</span
            ><span class="message">{{ wrongMessage("lastThreeNum") }}</span>
          </div>
          <span>背面末三碼</span>
          <input
            v-model="formData.lastThreeNum"
            type="text"
            name="last-three-num"
            maxlength="3"
            placeholder="信用卡背面末三碼"
            class="card"
            oninput="value = value.replace(/[^\d]/g , '')"
          />
        </label>
        <div class="note">
          ※
          提供VISA丶MasterCard丶JCB信用卡交易，全程使用安全加密，信用卡資料將不會儲存於網站，您可以安心使用信用卡付款。
        </div>
      </div>
      <div class="invoice-info">
        <div class="form-title">
          <div
            v-show="wrongMessage('invoiceCategories')"
            class="wrong-indicate"
          >
            <span class="triangle">▲</span>
            <span class="message">{{ wrongMessage("invoiceCategories") }}</span>
          </div>
          發票類型
        </div>
        <div @click="invoiceSelected" class="invoice-wrapper">
          <div
            data-invoice="personal"
            :class="[
              'invoice',
              { selected: formData.invoiceCategories === 'personal' },
            ]"
          >
            電子發票 - 個人
          </div>
          <div
            data-invoice="company"
            :class="[
              'invoice',
              { selected: formData.invoiceCategories === 'company' },
            ]"
          >
            電子發票 - 公司
          </div>
          <div
            data-invoice="donation"
            :class="[
              'invoice',
              { selected: formData.invoiceCategories === 'donation' },
            ]"
          >
            捐贈發票
          </div>
          <div
            data-invoice="carrier"
            :class="[
              'invoice',
              { selected: formData.invoiceCategories === 'carrier' },
            ]"
          >
            手機條碼載具
          </div>
        </div>
        <div class="invoice-footer">
          <span
            v-if="formData.invoiceCategories === 'personal'"
            class="invoice-personal"
            >依財政部規定，發票已託管，無需開立紙本發票。</span
          >
          <div
            v-else-if="formData.invoiceCategories === 'company'"
            class="invoice-company"
          >
            <div class="input-container">
              <div v-show="wrongMessage('company')" class="wrong-indicate">
                <span class="triangle">▲</span
                ><span class="message">{{ wrongMessage("company") }}</span>
              </div>
              <input
                v-model="formData.company"
                type="text"
                maxlength="8"
                placeholder="請輸入統一編號"
              />
            </div>
            <p style="color: #c14948">
              根據財政部「電子發票實施作業要點」，於消費開立「三聯電子發票」不主動寄送，lativ亦會將發票號碼上傳至政府平台。
            </p>
          </div>
          <div
            v-else-if="formData.invoiceCategories === 'donation'"
            class="invoice-donation"
          >
            <div v-show="wrongMessage('donation')" class="wrong-indicate">
              <span class="triangle">▲</span
              ><span class="message">{{ wrongMessage("donation") }}</span>
            </div>
            <select v-model="formData.donation" name="donated-group" required>
              <option value="" selected disabled>請選擇捐贈單位</option>
              <option value="donated-group-1">財團法人罕見疾病基金會</option>
              <option value="donated-group-2">財團法人創世福利基金會</option>
              <option value="donated-group-3">
                財團法人博幼社會福利基金會
              </option>
              <option value="donated-group-4">
                財團法人OMG關懷社會愛心基金會
              </option>
            </select>
          </div>
          <div v-else class="invoice-carrier">
            <div v-show="wrongMessage('carrier')" class="wrong-indicate">
              <span class="triangle">▲</span
              ><span class="message">{{ wrongMessage("carrier") }}</span>
            </div>
            <input
              v-model="formData.carrier"
              size="30"
              maxlength="8"
              oninput="value=value.replace(/[^A-Z0-9.+-/]/g,'')"
              type="text"
              placeholder="請輸入手機條碼(限大寫英數字)"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import post from "../assets/post.json";
import useVuelidate from "@vuelidate/core";
import { required, requiredIf, helpers } from "@vuelidate/validators";
import { moneyStyle } from "../utils/mixins";

//表單驗證客製規則
const phoneRule = (value) => /^09\d{8}$/g.test(value);
const addressRule = (value) => !helpers.req(value) || /.{5,}$/g.test(value);
const cardNumberRule = (value) => !helpers.req(value) || /\d{16}$/g.test(value);
const dueDateRule_MM = (value) =>
  !helpers.req(value) || /(^0\d$)|(^1[012])/g.test(value);
const dueDateRule_YY = (value) =>
  !helpers.req(value) || (/^\d{2}$/g.test(value) && value >= 22);
const lastThreeNumRule = (value) =>
  !helpers.req(value) || /^\d{3}$/g.test(value);
const companyRule = (value) => !helpers.req(value) || /^\d{8}$/g.test(value);
const carrierRule = (value) =>
  !helpers.req(value) || /^\/[0-9A-Z.+-]{7}$/g.test(value);

export default {
  props: {
    checkedItems: {
      type: Array,
      required: true,
    },
    checkoutInfo: {
      type: Object,
      required: true,
    },
  },
  mixins: [moneyStyle],
  data() {
    return {
      v$: useVuelidate(),
      formData: {
        payment_shipping: "",
        name: "",
        phone: "",
        pickUpStore: "",
        city: "",
        district: "",
        detailAddress: "",
        cardNumber: "",
        dueDate_MM: "",
        dueDate_YY: "",
        lastThreeNum: "",
        invoiceCategories: "",
        company: "",
        donation: "",
        carrier: "",
      },
    };
  },
  //表單驗證
  validations() {
    return {
      formData: {
        payment_shipping: {
          required: helpers.withMessage("請填入付款與運送方式", required),
        },
        name: { required: helpers.withMessage("請填入姓名", required) },
        phone: {
          required: helpers.withMessage("請填入手機號碼", required),
          phoneRule: helpers.withMessage("請確認填入正確的手機號碼", phoneRule),
        },
        pickUpStore: {
          required: helpers.withMessage(
            "請選擇取貨門市",
            requiredIf(function () {
              return this.shippingMethod === "7-11";
            })
          ),
        },
        city: {
          required: helpers.withMessage(
            "請選擇縣市",
            requiredIf(function () {
              return this.shippingMethod === "home-delivery";
            })
          ),
        },
        district: {
          required: helpers.withMessage(
            "請選擇地區",
            requiredIf(function () {
              return this.shippingMethod === "home-delivery";
            })
          ),
        },
        detailAddress: {
          required: helpers.withMessage(
            "請填入地址",
            requiredIf(function () {
              return this.shippingMethod === "home-delivery";
            })
          ),
          addressRule: helpers.withMessage("收件地址長度不足", addressRule),
        },
        cardNumber: {
          required: helpers.withMessage(
            "請填入信用卡號碼",
            requiredIf(function () {
              return this.payingMethod === "creditCard";
            })
          ),
          cardNumberRule: helpers.withMessage(
            "請確認是否為有效信用卡號碼",
            cardNumberRule
          ),
        },
        dueDate_MM: {
          required: helpers.withMessage(
            "請填入有效期限",
            requiredIf(function () {
              return this.payingMethod === "creditCard";
            })
          ),
          dueDateRule_MM: helpers.withMessage(
            "請確認是否為正確的有效期限",
            dueDateRule_MM
          ),
        },
        dueDate_YY: {
          required: helpers.withMessage(
            "請填入有效期限",
            requiredIf(function () {
              return this.payingMethod === "creditCard";
            })
          ),
          dueDateRule_YY: helpers.withMessage(
            "請確認是否為正確的有效期限",
            dueDateRule_YY
          ),
        },
        lastThreeNum: {
          required: helpers.withMessage(
            "請填入背面末三碼",
            requiredIf(function () {
              return this.payingMethod === "creditCard";
            })
          ),
          lastThreeNumRule: helpers.withMessage(
            "請確認是否為正確的末三碼",
            lastThreeNumRule
          ),
        },
        invoiceCategories: {
          required: helpers.withMessage("請選擇發票類型", required),
        },
        company: {
          required: helpers.withMessage(
            "請填入統一編號",
            requiredIf(function () {
              return this.formData.invoiceCategories === "company";
            })
          ),
          companyRule: helpers.withMessage(
            "請確認是否為正確的統一編號",
            companyRule
          ),
        },
        donation: {
          required: helpers.withMessage(
            "請選擇捐贈對象",
            requiredIf(function () {
              return this.formData.invoiceCategories === "donation";
            })
          ),
        },
        carrier: {
          required: helpers.withMessage(
            "請填入手機載具條碼",
            requiredIf(function () {
              return this.formData.invoiceCategories === "carrier";
            })
          ),
          carrierRule: helpers.withMessage(
            "請確認是否為正確的手機載具條碼",
            carrierRule
          ),
        },
      },
    };
  },
  computed: {
    cities() {
      return post.map((item) => item.name);
    },
    districts() {
      if (this.formData.city !== "")
        return post.filter((item) => item.name === this.formData.city)[0]
          .districts;
    },
    formatCardNumber() {
      return this.formData.cardNumber
        ? this.formData.cardNumber.match(/.{1,4}/g).join(" ")
        : "";
    },
    //拆分付款方式及運送方式
    payingMethod() {
      const data = this.formData.payment_shipping;
      if (data.includes("creditCard")) {
        return "creditCard";
      } else {
        return "";
      }
    },
    shippingMethod() {
      const data = this.formData.payment_shipping;
      if (data.includes("7-11")) {
        return "7-11";
      } else if (data.includes("home-delivery")) {
        return "home-delivery";
      }
    },
  },
  watch: {
    //選擇不同縣市時清空地區
    "formData.city"(newVal, oldVal) {
      if (newVal !== oldVal) this.formData.district = "";
    },
  },
  methods: {
    //因input欄位包含每四碼的空格，故不使用v-model綁定
    updateCardNumber(e) {
      this.formData.cardNumber = e.target.value;
    },
    //信用卡的到期日及末三碼填完都會自動跳到下一欄
    focusNext(e) {
      const target = e.target;
      const inputs = Array.from(target.form.querySelectorAll(".card"));
      const index = inputs.indexOf(target);
      if (target.value.length === target.maxLength) {
        inputs[index + 1].focus();
      }
    },
    invoiceSelected(e) {
      const invoice = e.target.dataset.invoice;
      if (invoice) this.formData.invoiceCategories = invoice;
    },
    wrongMessage(data) {
      const errors = this.v$.formData[data].$errors;
      if (errors.length) {
        return errors[0].$message;
      }
    },
    async submitForm() {
      const result = await this.v$.$validate();
      return result;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/SCSS/StepTwo.scss";
</style>
