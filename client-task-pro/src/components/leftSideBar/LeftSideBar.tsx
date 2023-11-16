import { FC } from 'react';
import { Layout } from 'antd';
import NavigationMenu from './components/NavigationMenu';
import TopLeftMenu from './components/TopLeftMenu';
const { Sider } = Layout;


const LeftSideBar: FC = () => {


    return (

        <Sider
            width={260}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                background: '#fff',
                borderRight: '1px solid #333333'
            }}
        >
            <TopLeftMenu />
            <NavigationMenu />


        </Sider>


    );
};

export default LeftSideBar;
