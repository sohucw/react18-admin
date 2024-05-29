import { useAuth } from './context/authContext';
import { ProjectList } from './pages/projectList';
import styled from '@emotion/styled';
import { Row } from './components/lib';
import { Dropdown, Menu, MenuProps } from 'antd';
// import logo from "./assets/logo48.svg";
import { ReactComponent as Logo } from './assets/logo48.svg';
// grid flex应用场景，
// 要考虑是1纬布局还是2纬布局，  1纬布局，就是一行一个元素（用flex），2纬布局，就是一行两个元素 用户 grid
// 从内容从发，先有一组内容， 数据一般不固定， 然后均匀的分布在容器中， 由内容决定容器的大小， 使用flex
// 从布局出发， 先规划网格 数据一般固定，  然后把元素均匀的放在容器中，  使用grid

export const AuthenticatedApp = () => {
    const { logout, user } = useAuth();
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a onClick={logout} href="/">
                    退出
                </a>
            )
        }
    ];
    return (
        <div>
            <Header>
                <HeaderLeft gap={true}>
                    <h2>
                        <Logo color={'#ff6e06'} />
                    </h2>
                    <h2>项目</h2>
                    <h2>用户</h2>
                </HeaderLeft>
                <HeaderRight>
                    <Dropdown menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>HI, {user?.name || '大伟'}</a>
                    </Dropdown>
                </HeaderRight>
            </Header>
            <Main>
                <ProjectList />
            </Main>
        </div>
    );
};

// const HeaderItem = styled.h3`
//     margin-right: 2rem;
// `;

const Header = styled.header`
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 3.2rem;
    flex-direction: row;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div`
    font-size: 1.6rem;
    padding-right: 3.2rem;
`;

const Main = styled.main`
    height: calc(100vh - 6rem);
`;
