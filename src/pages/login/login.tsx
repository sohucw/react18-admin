import React, { FormEvent } from "react";
import { useAuth } from "../../context/authContext";
import { Button, Form, Input } from "antd";
export const Login = () => {
    // const login = (param: { username: string; password: string }) => {};
    const { login, user } = useAuth();

    const handleSubmit = (values: { username: string; password: string }) => {
        // 登录成功后，跳转到首页
        login(values);
    };
    return (
        <Form onFinish={handleSubmit}>
            <div>{user ? <div>登录成功，用户名{user?.name}</div> : null}</div>

            <Form.Item
                name={"username"}
                rules={[{ required: true, message: "请输入用户名" }]}
            >
                <Input placeholder={"用户名"} type="text" id="username" />
            </Form.Item>
            <Form.Item
                name={"password"}
                rules={[{ required: true, message: "请输入密码" }]}
            >
                <Input placeholder={"密码"} type="password" id="password" />
            </Form.Item>
            <Form.Item>
                <Button htmlType={"submit"} type={"primary"}>
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};
