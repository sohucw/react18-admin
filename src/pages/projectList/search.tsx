import React from "react";
import { Input, Select } from "antd";
export interface IUser {
    id: string;
    name: string;
    token: string;
}
interface ISearchProps {
    users: IUser[];
    param: {
        name: string;
        personId: string;
    };
    setParam: (param: ISearchProps["param"]) => void;
}
export const Search = ({ users, param, setParam }: ISearchProps) => {
    // setParam(Object.assign(param, {name: "test"}))
    return (
        <form>
            <Input
                type="text"
                value={param.name}
                onChange={(event) =>
                    setParam({
                        ...param,
                        name: event.target.value,
                    })
                }
            />
            <Select
                value={param.personId}
                onChange={(value) =>
                    setParam({
                        ...param,
                        personId: value,
                    })
                }
            >
                <Select.Option value={""}>请选择</Select.Option>
                {users.map((item, index) => {
                    return (
                        <Select.Option key={item.id} value={item.id}>
                            {item.name}
                        </Select.Option>
                    );
                })}
            </Select>
        </form>
    );
};
