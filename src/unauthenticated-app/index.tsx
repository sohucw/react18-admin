import { useState } from "react";
import { Register } from "../pages/login/register";
import { Login } from "../pages/login/login";
export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <div>
            {isRegister ? <Register /> : <Login />}
            <button onClick={() => setIsRegister(!isRegister)}>
                切换到{isRegister ? "登录" : "注册"}
            </button>
        </div>
    );
};
