import React from "react";

export interface IUser {
    id: string;
    name: string;
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
            <input
                type="text"
                value={param.name}
                onChange={(event) =>
                    setParam({
                        ...param,
                        name: event.target.value,
                    })
                }
            />
            <select
                value={param.personId}
                onChange={(event) =>
                    setParam({
                        ...param,
                        personId: event.target.value,
                    })
                }
            >
                <option value={""}>请选择</option>
                {users.map((item, index) => {
                    return (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </form>
    );
};
