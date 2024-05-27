import React, { ReactNode, useState } from "react";
import * as auth from "../auth-provider";
import { IUser } from "../pages/projectList/search";

interface AuthForm {
    username: string;
    password: string;
}

const AuthContext = React.createContext<
    | {
          user: IUser | null;
          login: (form: AuthForm) => Promise<void>;
          register: (form: AuthForm) => Promise<void>;
          logout: () => Promise<void>;
          test: () => void;
      }
    | undefined
>(undefined);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // 这里要考虑到初始值的类型与后续值类型，取并组成一个泛型
    const [user, setUser] = useState<IUser | null>(null);

    const login = (form: AuthForm) =>
        auth
            .login(form)
            .then((user) => {
                setUser(user);
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    const register = (form: AuthForm) =>
        auth.register(form).then((user) => {
            console.log("注册成功", user.token);
            window.localStorage.setItem("token", user.token);
            setUser(user);
        });
    const logout = () => auth.logout();

    const test = () => {
        console.log("测试-----", user);
    };
    return (
        <AuthContext.Provider
            children={children}
            value={{ user, login, register, logout, test }}
        />
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth 必须在 AuthProvider 中使用");
    }
    return context;
};
