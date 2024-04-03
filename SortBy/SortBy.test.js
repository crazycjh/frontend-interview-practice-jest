const  sortBy = require('./SortBy');

test('sortBy', () => {
    const arr = [5, 4, 1, 2, 3]
    const fn = (x) => x;
    expect(sortBy(arr, fn)).toEqual([1, 2, 3, 4, 5]);

    const arr2 = [{"x": 1}, {"x": 0}, {"x": -1}]
    const fn2 = (d) => d.x;
    expect(sortBy(arr2, fn2)).toEqual([{"x": -1}, {"x": 0}, {"x": 1}]);
});