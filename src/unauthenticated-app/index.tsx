import { useState } from "react";
import { Register } from "../pages/login/register";
import { Login } from "../pages/login/login";
import { Card, Divider, Button } from "antd";
import styled from "@emotion/styled";
import logo from "../assets/logo.svg";

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <Container>
            <Header />
            <ShadowCard>
                <Title>{isRegister ? "请注册" : "请登录"}</Title>
                {isRegister ? <Register /> : <Login />}
                <Divider />
                <a onClick={() => setIsRegister(!isRegister)}>
                    切换到{isRegister ? "登录" : "注册"}
                </a>
            </ShadowCard>
        </Container>
    );
};

export const LongButton = styled(Button)`
    width: 100%;
`;

const Title = styled.h2`
    margin-bottom: 2.4rem;
    color: rgb(94, 108, 132);
`;
// const Background = styled.div`
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background-repeat: no-repeat;
//     background-attachment: fixed;
//     background-position:
//         left bottom,
//         right bottom;

// `;
const Header = styled.header`
    background: url(${logo}) no-repeat center;
    padding: 5rem 0;
    width: 100%;
`;
const ShadowCard = styled(Card)`
    width: 40rem;
    min-height: 56rem;
    padding: 3.2rem 5rem;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    text-align: center;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;
