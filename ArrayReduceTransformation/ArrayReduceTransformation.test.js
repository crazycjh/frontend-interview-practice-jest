// 撰寫ArrayReduceTransformation.test.js測試
// 撰寫ArrayReduceTransformation.js
// 測試用例
const reduce = require('./ArrayReduceTransformation');

test('reduce', () => {
    const nums = [1, 2, 3, 4, 5];
    const fn = (curr, item) => curr + item;
    const init = 0;
    expect(reduce(nums, fn, init)).toBe(15);
});


// 解釋上面這段測試用例

