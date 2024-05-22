import React, { useEffect, useState } from "react";
export const Search = () => {
    const [param, setParam] = useState({
        name: "",
        personId: "",
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    // 参数变化的时候 获取用户列表
    useEffect(() => {
        fetch("")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, [param]);

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
                        <option key={index} value={item.id}>
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </form>
    );
};
