## 題目
給定一個陣列 arr 和一個函式 fn，回傳一個排序後的陣列 sortedArr。可以假設 fn 只回傳數字，而這些數字決定了sortedArr 的排序順序。sortedArr 必須按照 fn 的輸出值升冪排序。

可以假設對於給定的陣列，fn 不會傳回重複的數字。
範例 1：
輸入： arr = [5, 4, 1, 2, 3], fn = (x) => x
輸出： [1, 2, 3, 4, 5]
解釋： fn 只是傳回傳入的數字，因此陣列按升冪排序。
​
範例 2：
輸入： arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
輸出： [{"x": -1} , {"x": 0}, {"x": 1}]
解釋： fn 傳回 "x" 鍵的值，因此陣列會根據該值排序。 

解法在ExplainThis官方網站上：[24題](https://explainthisio.notion.site/50-ebf0d22c9bc848cda26bc455bebffafc)
## 思路
題目要先看懂ＸＤ，這裡只是要fn回傳要被做排序的數值，因為array裡面element可能是object，也可能需要對其值做些操做後再比較，
這題沒有要自己寫排序，是要知道array.sort()的用法。

而因為是升冪所以用a - b的方式來計算，若是降冪則反過來，如果不太清楚Array.sort()的用法，可以參考[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)，去這裡研究compareFn的用法。

