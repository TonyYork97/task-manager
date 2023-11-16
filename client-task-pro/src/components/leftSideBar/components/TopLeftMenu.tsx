import { Typography } from 'antd';
import { FC } from 'react';

const TopLeftMenu: FC = () => {


    return (
        <div
            style={{
                paddingLeft: '28px'
            }}
        >
            <Typography.Title level={2}>Manager Pro</Typography.Title>
        </div>
    );
};

export default TopLeftMenu;
