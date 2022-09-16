<template>
  <div class="orderer-information">
    <input id="cart-item-toggle" type="checkbox" />
    <div class="total-price">
      <span>本次消費總計</span>
      <span style="color: #c14948; font-size: 18px">NT$ 599</span>
    </div>
    <label for="cart-item-toggle" class="total-num">
      <span>總計 1 件商品</span>
      <font-awesome-icon class="toggle-icon" icon="fa-solid fa-angle-right" />
    </label>
    <div id="hidden-cart">
      <div class="cart-checking">
        <div class="cart-items">
          <div class="cart-item">
            <div class="cart-item-left">
              <img
                src="https://s.lativ.com.tw/i/56351/56351031/5635103_360.jpg"
                alt="item-img"
                class="item-img"
              />
              <div class="item-info">
                <div class="item-name">棉質直筒工作褲-男</div>
                <label for="style-toggle" class="item-style">黑色-S</label>
              </div>
            </div>
            <div class="cart-item-right">
              <div class="item-num">
                <span class="num">1</span>
              </div>
              <div class="item-price">$ 80</div>
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
        <div class="discount">
          <span>帳戶扣抵</span>
          <span>$ 0</span>
        </div>
        <div class="total-price">
          <span>小計</span>
          <span>NT$ 450</span>
        </div>
      </div>
    </div>
    <form>
      <div class="shipping-methods">
        <div class="form-title">付款與運送方式</div>
        <label class="shipping-method"
          ><input
            type="radio"
            name="shipping-method"
            value="7-11_pick-up-and-pay"
          />7-11取貨付款</label
        >
        <label class="shipping-method"
          ><input
            type="radio"
            name="shipping-method"
            value="creditCard_home-delivery"
          />線上刷卡-宅配</label
        >
        <label class="shipping-method"
          ><input
            type="radio"
            name="shipping-method"
            value="creditCard_7-11"
          />線上刷卡-7-11取貨 (請填真實姓名，超商將核對證件)</label
        >
      </div>
      <div class="recipient-info">
        <div class="form-title">收件人資訊</div>
        <label class="name">
          <span>姓名</span>
          <input
            type="text"
            name="full-name"
            maxlength="15"
            placeholder="輸入姓名"
          />
        </label>
        <label class="phone-number">
          <span>手機號碼</span>
          <input
            type="tel"
            name="phone-number"
            maxlength="10"
            oninput="value=value.replace(/[^\d]/g,'')"
            placeholder="輸入有效手機號碼"
          />
        </label>
        <label class="pick-up-store" v-show="1">
          <span>取件門市</span>
          <img
            src="https://s4.lativ.com.tw/images/icon_711.gif"
            alt="7-11_logo"
            class="7-11_logo"
            style="width: 30px; display: inline"
          />
          <div class="select-wrapper">
            <select class="store-info" name="store-info">
              <option selected disabled value="">請選擇取件門市</option>
            </select>
            <font-awesome-icon
              class="toggle-icon"
              icon="fa-solid fa-angle-right"
            />
          </div>
        </label>
        <div class="address">
          <label class="pick-up-city" v-show="1">
            <span>請選擇縣市</span>
            <div class="select-wrapper">
              <select
                v-model="selectedCity"
                required
                class="store-info"
                name="store-info"
              >
                <option selected disabled value="">請選擇縣市</option>
                <option
                  v-for="(city, index) in cities"
                  :key="city"
                  :value="index"
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
          <label class="pick-up-district" v-show="1">
            <span>請選擇地區</span>
            <div class="select-wrapper">
              <select
                v-model="selectedDistrict"
                required
                class="store-info"
                name="store-info"
              >
                <option selected disabled value="">請選擇地區</option>
                <option
                  v-for="(district, index) in districts"
                  :value="index"
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
        <label class="detail-address" v-show="1">
          <input
            type="text"
            name="address"
            size="40"
            placeholder="請輸入地址"
          />
        </label>
      </div>
      <div class="credit-card-info">
        <div class="form-title">信用卡資訊</div>
        <label class="card-number">
          <span>信用卡卡號</span>
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
          <span>有效期限</span>
          <input
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
          <span>背面末三碼</span>
          <input
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
        <div class="form-title">發票類型</div>
        <div @click="invoiceSelected" class="invoice-wrapper">
          <div
            data-invoice="personal"
            :class="['invoice', { selected: invoiceCategories === 'personal' }]"
          >
            電子發票 - 個人
          </div>
          <div
            data-invoice="company"
            :class="['invoice', { selected: invoiceCategories === 'company' }]"
          >
            電子發票 - 公司
          </div>
          <div
            data-invoice="donation"
            :class="['invoice', { selected: invoiceCategories === 'donation' }]"
          >
            捐贈發票
          </div>
          <div
            data-invoice="carrier"
            :class="['invoice', { selected: invoiceCategories === 'carrier' }]"
          >
            手機條碼載具
          </div>
        </div>
        <div class="invoice-footer">
          <span v-if="invoiceCategories === 'personal'" class="invoice-personal"
            >依財政部規定，發票已託管，無需開立紙本發票。</span
          >
          <div
            v-else-if="invoiceCategories === 'company'"
            class="invoice-company"
          >
            <input type="text" maxlength="15" placeholder="請輸入統一編號" />
            <span style="color: #c14948"
              >根據財政部「電子發票實施作業要點」，於消費開立「三聯電子發票」不主動寄送，lativ亦會將發票號碼上傳至政府平台。</span
            >
          </div>
          <div
            v-else-if="invoiceCategories === 'donation'"
            class="invoice-donation"
          >
            <select name="donated-group" required>
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
            <input
              size="30"
              maxlength="8"
              oninput="value=value.replace(/[^A-Z0-9/]/g, '')"
              type="text"
              placeholder="請輸入手機條碼(限大寫英數字)"
            />
          </div>
        </div>
      </div>
      <div class="invoice-agreement">
        <input type="checkbox" id="agreement-toggle" name="agreement-toggle" />
        <label for="agreement-toggle"></label>
        <span
          >我同意辦理退貨時，由 lativ
          代為處理電子發票及銷貨退回折讓單以加速退款作業。</span
        >
      </div>
    </form>
  </div>
</template>

<script>
import post from "../assets/post.json";
export default {
  data() {
    return {
      selectedCity: "",
      selectedDistrict: "",
      cardNumber: "",
      invoiceCategories: "",
    };
  },
  computed: {
    cities() {
      return post.map((item) => item.name);
    },
    districts() {
      if (this.selectedCity !== "") return post[this.selectedCity].districts;
    },
    formatCardNumber() {
      return this.cardNumber ? this.cardNumber.match(/.{1,4}/g).join(" ") : "";
    },
  },
  watch: {
    selectedCity(newVal, oldVal) {
      if (newVal !== oldVal) this.selectedDistrict = "";
    },
  },
  methods: {
    updateCardNumber(e) {
      this.cardNumber = e.target.value;
    },
    focusNext(e) {
      const target = e.target;
      const inputs = Array.from(target.form.querySelectorAll(".card"));
      const index = inputs.indexOf(target);
      if (target.value.length === target.maxLength) {
        console.log(index);
        inputs[index + 1].focus();
      }
    },
    invoiceSelected(e) {
      const invoice = e.target.dataset.invoice;
      if (invoice) this.invoiceCategories = invoice;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/SCSS/StepTwo.scss";
</style>