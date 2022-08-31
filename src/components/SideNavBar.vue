<template>
  <div class="asideToggle">
    <font-awesome-icon
      font-size="30px"
      icon="fa-solid fa-circle-chevron-right"
    />
  </div>
  <aside class="categories">
    <ul>
      <li
        v-for="category in categories"
        :key="category.id"
        class="category-wrapper"
      >
        <input
          :id="'category' + category.id"
          class="secondary-categories-checkbox"
          type="checkbox"
        />
        <label :for="'category' + category.id" class="primary-category">
          {{ category.title }}
          <div
            v-show="category.secondaryCategory.length"
            class="secondary-categories-toggle"
          >
            <font-awesome-icon icon="fa-solid fa-angle-right" />
          </div>
        </label>
        <ul
          v-show="category.secondaryCategory"
          class="secondary-categories open"
        >
          <li
            v-for="(secondaryTier, index) in category.secondaryCategory"
            :key="index"
            class="secondary-category"
          >
            。{{ secondaryTier }}
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 1,
      title: "上衣類",
      secondaryCategory: [
        "All",
        "基本短T",
        "基本長T",
        "印花短T",
        "印花長T",
        "大學T",
        "POLO衫",
        "基本背心",
      ],
    },
    {
      id: 2,
      title: "襯衫類",
      secondaryCategory: ["All", "商務襯衫", "休閒襯衫", "設計襯衫"],
    },
    {
      id: 3,
      title: "針織衫/毛衣",
      secondaryCategory: [],
    },
    {
      id: 4,
      title: "外套夾克",
      secondaryCategory: [
        "All",
        "休閒外套",
        "防風外套",
        "抗UV外套",
        "西裝/大衣",
        "仿皮外套",
        "鋪棉外套",
        "極輕羽絨",
      ],
    },
    {
      id: 5,
      title: "下身類",
      secondaryCategory: [
        "All",
        "裙裝",
        "短褲",
        "牛仔褲",
        "西裝褲",
        "長褲",
        "內搭褲",
      ],
    },
    {
      id: 6,
      title: "洋裝/連身褲",
      secondaryCategory: [],
    },
    {
      id: 7,
      title: "家居/內著",
      secondaryCategory: [
        "發熱衣褲",
        "家居服",
        "涼感衣",
        "內衣",
        "內褲",
        "安全褲",
        "襪子",
      ],
    },
    {
      id: 8,
      title: "包包/皮夾",
      secondaryCategory: [
        "All",
        "手提包",
        "肩背包",
        "後背包",
        "托特包",
        "皮夾",
      ],
    },
    {
      id: 9,
      title: "圍巾/絲巾",
      secondaryCategory: [],
    },
    {
      id: 10,
      title: "帽子",
      secondaryCategory: [],
    },
    {
      id: 11,
      title: "女鞋",
      secondaryCategory: [],
    },
    {
      id: 12,
      title: "太陽眼鏡",
      secondaryCategory: [],
    },
    {
      id: 13,
      title: "飾品",
      secondaryCategory: [],
    },
    {
      id: 14,
      title: "手套",
      secondaryCategory: [],
    },
  ],
};

export default {
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.categories = dummyData.categories;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/SCSS/SideNavBar.scss";
</style>
