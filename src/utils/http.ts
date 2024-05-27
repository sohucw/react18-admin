import qs from "qs";
import * as auth from "../auth-provider";
import { useAuth } from "../context/authContext";

const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
    token?: string;
    data?: object;
}

export const http = async (
    endpont: string,
    { data, token, headers, ...customConfig }: Config = {},
) => {
    const config = {
        method: "GET",
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "Content-Type": data ? "application/json" : "",
        },
        ...customConfig,
    };
    if (config.method.toLowerCase() === "get") {
        endpont = `${endpont}?${qs.stringify(data)}`;
    } else {
        config.body = JSON.stringify(data || {});
    }
    return window
        .fetch(`${apiUrl}/${endpont}`, config)
        .then(async (response) => {
            if (response.status === 401) {
                await auth.logout();
                window.location.reload();
                return Promise.reject({ message: "Unauthorized" });
                // window.location.href = "/login";
            }
            const data = await response.json();
            if (response.ok) {
                return data;
            } else {
                return Promise.reject(data);
            }
        });
};

export const useHttp = () => {
    const { user } = useAuth();
    return (...[endpoint, config]: Parameters<typeof http>) =>
        http(endpoint, { ...config, token: user?.token });
};
