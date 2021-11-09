import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
    title:'Dashboard',
    path:"/Home",
    icon:<MdIcons.MdDashboard/>,
    cName: 'nav-text'
    },
    {
    title:'Fluxo de Caixa',
    path:"/Products",
    icon:<IoIcons.IoIosPaper />,
    cName: 'nav-text'
    },
    {
    title:'Usuário',
    path:"/Reports",
    icon:<FaIcons.FaUserCog />,
    cName:'nav-text'
    }

]

export default SidebarData;