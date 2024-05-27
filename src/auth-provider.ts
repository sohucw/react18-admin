// 真实环境中如果使用 firebase等第三方库，需要在这里引入  不需要在这里开发
import { IUser } from "./pages/projectList/search";
// 在真实环境中，如果使用了 firebase 这种第三方 auth 服务的话，本文件不需要开发者开发

const localStorageKey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (user: IUser) => {
    debugger;
    window.localStorage.setItem(localStorageKey, user.token || "");
    return user;
};

export const login = (data: { username: string; password: string }) => {
    return fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (res) => {
        if (res.ok) {
            return handleUserResponse(await res.json());
        } else {
            return Promise.reject(data);
        }
    });
};

export const register = (data: { username: string; password: string }) => {
    return fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (res) => {
        if (res.ok) {
            return handleUserResponse(await res.json());
        } else {
            return Promise.reject(data);
        }
    });
};

export const logout = async () =>
    window.localStorage.removeItem(localStorageKey);
