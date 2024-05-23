import React from "react";
import { IUser } from "./search";
interface IProject {
    id: string;
    name: string;
    personId: string;
    organization: string;
}
interface ListProps {
    list: IProject[];
    users: IUser[];
}
export const List = ({ list, users }: ListProps) => {
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
