import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faCartShopping,
  faAngleRight,
  faCircleChevronRight,
  faCirclePlus,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faCartShopping,
  faAngleRight,
  faCircleChevronRight,
  faCirclePlus,
  faCircleMinus
);

//換頁後置頂
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});

const app = createApp(App);


app
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")

