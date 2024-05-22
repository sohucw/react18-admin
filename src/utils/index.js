export const isEmpty = (value) => (value === 0 ? false : !value);
// 函数内部 不要改变传入的对象， 不要污染传入的对象
export const emptyObj = (obj) => {
    const res = { ...obj };
    // 如果是value是 0的话  有问题
    Object.keys(res).forEach((key) => {
        if (isEmpty(res[key])) {
            delete res[key];
        }
    });
    return res;
};
