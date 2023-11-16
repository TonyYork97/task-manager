import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react';
import {
    AppstoreOutlined,
    CalendarOutlined,
    LinkOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(
        <Link to="/tasks" >
            Tasks
        </Link>, '/tasks', <AppstoreOutlined />),
    getItem(
        <Link to="/daily" >
            Daily
        </Link>, '/daily', <CalendarOutlined />),
    getItem(
        <Link to="/events" >
            Events
        </Link>, '/events', <CalendarOutlined />),
    getItem(
        <Link to="/calendar" >
            Calendar
        </Link>, '/calendar', <CalendarOutlined />),
    getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
        getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('Navigation Three', 'sub2', <SettingOutlined />, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
    getItem(
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design
        </a>,
        'link',
        <LinkOutlined />,
    ),
];

const NavigationMenu: FC = () => {
    const location = useLocation();
    console.log(location);

    return (
        <Menu
            style={{ width: 256 }}
            mode='inline'
            items={items}
            selectable={!!items.find(el => el?.key === location.pathname)}
        />
    );
};

export default NavigationMenu;
