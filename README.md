# Girls Closet v3.0 商品管理版

女孩衣櫃間 Girls Closet 官方網站 v3.0。

## 本版新增

- products.js：商品資料集中管理
- main.js：首頁商品自動生成
- product.html：商品詳細頁
- product.js：商品詳細頁自動讀取商品資料
- 品牌篩選按鈕
- LINE 詢問按鈕保留並可點擊

## 上架商品方式

1. 將圖片放進 images/品牌資料夾，例如：
   images/kuose/first-bloom.jpg

2. 打開 products.js，複製一筆商品資料並修改：
   - id
   - brand
   - name
   - price
   - size
   - color
   - material
   - description
   - image

3. image 填圖片路徑，例如：
   image: "images/kuose/first-bloom.jpg"

4. 上傳 GitHub：
   - products.js
   - 商品圖片
   - 如有第一次升級 v3.0，需上傳全部檔案

## 注意

id 不可以重複，建議格式：
kuose-dress-001
mishow-top-001
snidel-dress-001
