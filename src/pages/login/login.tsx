import React, { FormEvent } from "react";
import { useAuth } from "../../context/authContext";
export const Login = () => {
    // const login = (param: { username: string; password: string }) => {};
    const { login, user } = useAuth();

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
            <div>{user ? <div>登录成功，用户名{user?.name}</div> : null}</div>
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
