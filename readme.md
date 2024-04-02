# E+成長計畫 - 前端手寫題之30天打卡 :rocket:

這是我的 **E+成長計畫** 參與記錄！這個計畫是由 **ExplaininThis** 團隊推出的，旨在鼓勵開發者通過每日練習手寫題目來提升前端技能。在這個30天的挑戰中，我會把我的解題思路以及單元測試放在這裡，單元測試會使用 `Jest` 作為我的測試工具。

## :dart: 計畫特色

- **每日挑戰**：從題目列表中每天選擇一道題目來解，提升自己的程式撰寫能力。題目列表見[ExplainThis官方頁面](https://explainthisio.notion.site/ExplainThis-50-8fe7055e22d5467586f7d2c22719684f)。
- **知識分享**：將解題思路和代碼分享至discord，與其他參與者交流心得。
- **邏輯訓練**：記錄解題過程，幫助自己梳理思路，加深對題目的理解。

## :bulb: 學習收穫

- **探索新知**：接觸到以往不熟悉的 JavaScript ES6 或更高版本的功能，拓展了對語言的了解。
- **思考能力提升**：通過撰寫和分享解題思路，訓練了自己的邏輯思考能力。
- **單元測試實踐**：練習使用 `Jest` 進行單元測試，提高了對測試方法論的掌握。

## :wrench: 環境設置

### 安裝 Jest

開始前，確保你的系統已安裝 Node.js。接著執行以下命令安裝 Jest：

```bash
npm init -y
npm install --save-dev jest
## 配置 Jest
#在你的 `package.json` 中添加 Jest 配置來啟用詳細的輸出：
"jest": {
  "verbose": true
}
#撰寫和運行測試
#為你的功能代碼建立測試檔案，格式為 <功能名稱>.test.js。例如：swap.test.js。
#在測試檔案中撰寫測試代碼，測試你的功能。
#運行測試：

npm test
#或者只運行指定的測試檔案：
npm test path/to/your/test/file.js

```
