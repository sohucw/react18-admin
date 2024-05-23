import { useEffect, useState } from "react";
export const isEmpty = (value: any) => (value === 0 ? false : !value);
// 函数内部 不要改变传入的对象， 不要污染传入的对象
export const emptyObj = (obj: object) => {
    const res = { ...obj };
    // 如果是value是 0的话  有问题
    Object.keys(res).forEach((key) => {
        // @ts-ignore
        if (isEmpty(res[key])) {
            // @ts-ignore
            delete res[key];
        }
    });
    return res;
};

export const useMount = (fn: () => void) => {
    // 必须要在hooks里面使用， 去掉 use eslit报错， 所有一定要 use开头
    useEffect(() => {
        fn();
    }, []);
};

// 后面用泛型来规范类型？？？？
export const useDebounce = <V>(value: V, delay?: number) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        // 每次value改变的时候， 重新设置 定时器， debounceValue
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        // 每次在上次useEffect执行后 (一般都是负责清理的任务) 再执行这个return后的内容，  每次执行完上一次的时候， 清除定时器
        return () => clearTimeout(timer); // 最后一个没人处理， 定时器没有被清除
    }, [value, delay]);

    return debounceValue;
};

export const useArray = <T>(initArray: T[]) => {
    const [value, setValue] = useState(initArray);
    return {
        value,
        setValue,
        add: (item: T) => {
            setValue([...value, item]);
        },
        clear: () => {
            setValue([]);
        },
        removeIndex: (index: number) => {
            const newArray = [...value];
            newArray.splice(index, 1); // 在index处 删除一个元素
            setValue(newArray);
        },
    };
};
