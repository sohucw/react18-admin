import React, { useState, useEffect } from "react";
import { Search } from "./search";
import { List } from "./list";
import { emptyObj, useDebounce, useMount } from "../../utils";
import { useHttp } from "../../utils/http";
export const ProjectList = () => {
    const [users, setUsers] = useState([]);

    const [param, setParam] = useState({
        name: "",
        personId: "",
    });
    const debounceParam = useDebounce(param, 200);
    const [list, setList] = useState([]);
    const clinet = useHttp();
    // 参数变化的时候 获取用户列表
    useEffect(() => {
        clinet("projects", { data: emptyObj(debounceParam) }).then(setList);
        // 提前这个地址
        // fetch(
        //     // 拼接参数 如果参数很多很麻烦，可以使用qs库  `${apiUrl}/projects?name=${param.name}&personId=${param.personId}`,
        //     `${apiUrl}/projects?${qs.stringify(emptyObj(debounceParam))}`,
        // )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setList(data);
        //     });
    }, [debounceParam]); // 其实是监听的 debounceParam的值的变化的频率！！！！
    useMount(() => {
        clinet("users").then(setUsers);
        // fetch(`${apiUrl}/users`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setUsers(data);
        //     });
    }); // 第一次加载的时候执行一次   初始化的情况，是非常多的
    return (
        <div>
            <Search users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    );
};
