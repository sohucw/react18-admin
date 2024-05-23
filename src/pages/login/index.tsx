import React, { FormEvent } from "react";
export const Login = () => {
    const login = (param: { username: string; password: string }) => {};
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
            <button type="submit">注册</button>
        </form>
    );
};
