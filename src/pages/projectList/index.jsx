import React, { useState, useEffect } from "react";
import * as qs from "qs";
import { Search } from "./search";
import { List } from "./list";
import { emptyObj } from "../../utils";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectList = () => {
    const [users, setUsers] = useState([]);

    const [param, setParam] = useState({
        name: "",
        personId: "",
    });
    const [list, setList] = useState([]);
    // 参数变化的时候 获取用户列表
    useEffect(() => {
        // 提前这个地址
        fetch(
            // 拼接参数 如果参数很多很麻烦，可以使用qs库  `${apiUrl}/projects?name=${param.name}&personId=${param.personId}`,
            `${apiUrl}/projects?${qs.stringify(emptyObj(param))}`,
        )
            .then((res) => res.json())
            .then((data) => {
                setList(data);
            });
    }, [param]);
    useEffect(() => {
        fetch(`${apiUrl}/users`)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);
    return (
        <div>
            <Search users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    );
};
