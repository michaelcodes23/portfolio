import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About Me',
        path: '/about',
        icon: <BsIcons.BsPersonBoundingBox/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <CgIcons.CgWorkAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact Info',
        path: '/contactinfo',
        icon: <RiIcons.RiContactsBook2Line/>,
        cName: 'nav-text'
    },
]