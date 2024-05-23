import React, { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
export const Login = () => {
    const login = (param: { username: string; password: string }) => {
        fetch(`${apiUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(param),
        })
            .then((res) => res.json())
            .then((data) => {});
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;
        console.log(username, password);
        // 登录成功后，跳转到首页
        login({ username, password });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">用户名</label>
                <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="password">密码</label>
                <input type="password" id="password" />
            </div>
            <button type="submit">登录</button>
        </form>
    );
};
