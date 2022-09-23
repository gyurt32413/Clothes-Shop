import { createStore } from "vuex";

//創建一個store實例
export default createStore({
  state: {
    cartItems:[]
  },
  getters: {},
  mutations: {
    setCartItems(state, cartItem) {
      //判斷同款式的商品是否已於購物車中，若有則在原有的item上增加數量，若無則添加新的item至購物車
      const itemIndex =state.cartItems.findIndex(item => item.id === cartItem.id & item.color === cartItem.color & item.size === cartItem.size)
      if(itemIndex!==-1) {
        state.cartItems[itemIndex].num += cartItem.num
      } else {
        state.cartItems.push(cartItem)
      }
    },
    updateCartItems(state, cartItems) {
      state.cartItems = [...cartItems]
    }
  },
  actions: {},
  modules: {},
});
