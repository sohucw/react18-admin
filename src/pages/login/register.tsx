import React, { FormEvent } from "react";
import { useAuth } from "../../context/authContext";
import { Button, Form, Input } from "antd";
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
        <Form onFinish={handleSubmit}>
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
                    注册
                </Button>
            </Form.Item>
        </Form>
    );
};
