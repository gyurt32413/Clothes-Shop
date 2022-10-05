# clothes_shop

![image](https://user-images.githubusercontent.com/72433480/194013047-80d9f523-aca7-4a37-bf8e-1b70343dc6dc.png)


## 簡介
服飾電商網站，layout主要是仿製服飾品牌lativ及Net的設計，並加入不同裝置的RWD樣板設計。  
各類別衣服的資料係串接[googlesheet](https://docs.google.com/spreadsheets/d/1ViK6LFXot5uouK2HNlpKohT0mtli1rYrSV2woeVkvTM/edit#gid=956552859)，而左側side-navbar的服飾種類則使用dummy-data，僅有版面呈現之效果。  
另購物車結帳時加入表單驗證的功能。

## 功能
+ 使用者可以瀏覽男裝、女裝、童裝及運動類別的所有服飾
+ 使用者可以在商品頁選擇衣服的顏色、尺寸及數量，並加入至購物車
+ 使用者可以直接在購物車內調整衣服的顏色、尺寸及數量
+ 使用者可以透過購物車圖示預覽已加入至購物車的商品
+ 使用者在結帳頁面未填寫資料或格式有誤，會有錯誤訊息提示


##本地執行專案
1. 確認使用環境已有node.js及npm
2. 下載(clone)此專案
    ```
    git clone https://github.com/gyurt32413/Clothes-Shop.git
    ```
3. 透過終端機安裝npm套件
    ```
    npm install
    ```
4. 透過終端機執行該專案
    ```
    npm run dev
    ```
5. 於瀏覽器輸入`http://127.0.0.1:5173/` 即可進入該網頁


## 開發工具
+ Node.js 16.16.0
+ Vite 3.0.7
+ Vue 3.2.13
+ Vue-router 4.0.3
+ Vuex 4.0.0
+ bootstrap 5.2.1
