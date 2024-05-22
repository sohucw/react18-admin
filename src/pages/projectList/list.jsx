import React from "react";
export const List = ({ list, users }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>ower</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            {/* <td>{item.owerName}</td> */}
                            <td>
                                {users.find((user) => user.id === item.personId)
                                    ?.name || "未知"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
