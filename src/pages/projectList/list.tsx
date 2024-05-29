import React from 'react';
import { IUser } from './search';
import { Table } from 'antd';
import dayjs from 'dayjs';
interface IProject {
    id: string;
    name: string;
    personId: string;
    organization: string;
    createTime: number;
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
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                    sorter: (a, b) => a.name.localeCompare(b.name)
                },
                {
                    title: '部门',
                    key: 'organization',
                    dataIndex: 'organization'
                },
                {
                    title: '项目负责人',
                    key: 'id',
                    render(value, project) {
                        return (
                            <span>
                                {users.find((user) => user.id === project.personId)?.name || '未知'}
                            </span>
                        );
                    }
                },
                {
                    title: '创建时间',
                    render(value, project) {
                        return (
                            <span>
                                {project.createTime
                                    ? dayjs(project.createTime).format('YYYY-MM-DD: hh:mm')
                                    : '未知'}
                            </span>
                        );
                    }
                }
            ]}
            dataSource={list}
        ></Table>
    );
};
