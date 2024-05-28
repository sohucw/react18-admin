import React from "react";
import { IUser } from "./search";
import { Table } from "antd";
import { title } from "process";
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
        <Table
            pagination={false}
            columns={[
                {
                    title: "名称",
                    dataIndex: "name",
                    sorter: (a, b) => a.name.localeCompare(b.name),
                },
                {
                    title: "项目负责人",
                    render(value, project) {
                        return (
                            <span>
                                {users.find(
                                    (user) => user.id === project.personId,
                                )?.name || "未知"}
                            </span>
                        );
                    },
                },
            ]}
            dataSource={list}
        ></Table>
    );
};
