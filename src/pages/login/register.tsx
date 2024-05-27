import React, { FormEvent } from "react";
import { useAuth } from "../../context/authContext";
export const Register = () => {
    const { register, test } = useAuth();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;
        console.log(username, password);
        // 登录成功后，跳转到首页
        register({ username, password });
        test();
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
