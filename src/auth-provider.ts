// 真实环境中如果使用 firebase等第三方库，需要在这里引入  不需要在这里开发
import { IUser } from "./pages/projectList/search";
const localStorageKey = "auth-provider";
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => window.localStorage.getItem(localStorageKey);
export const handleUserRes = (user: IUser) => {
    window.localStorage.setItem(localStorageKey, user.token);
    return user;
};
export const login = (data: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => {
            return handleUserRes(data);
        });
};

export const register = (data: { username: string; password: string }) => {
    fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => {
            return handleUserRes(data);
        });
};

export const logout = () => {
    window.localStorage.removeItem(localStorageKey);
};

export const setToken = (token: string) =>
    window.localStorage.setItem(localStorageKey, token);
