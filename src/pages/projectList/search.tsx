import React from 'react';
import { Input, Select, Form } from 'antd';
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
    setParam: (param: ISearchProps['param']) => void;
}
export const Search = ({ users, param, setParam }: ISearchProps) => {
    // setParam(Object.assign(param, {name: "test"}))
    return (
        <Form style={{ marginBottom: '2rem' }} layout={'inline'}>
            <Form.Item label="项目名称">
                <Input
                    type="text"
                    placeholder="请输入项目名称"
                    value={param.name}
                    onChange={(event) =>
                        setParam({
                            ...param,
                            name: event.target.value
                        })
                    }
                />
            </Form.Item>
            <Form.Item label="负责人">
                <Select
                    value={param.personId}
                    onChange={(value) =>
                        setParam({
                            ...param,
                            personId: value
                        })
                    }
                >
                    <Select.Option value={''}>请选择</Select.Option>
                    {users.map((item, index) => {
                        return (
                            <Select.Option key={item.id} value={item.id}>
                                {item.name}
                            </Select.Option>
                        );
                    })}
                </Select>
            </Form.Item>
        </Form>
    );
};
