import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css'
import { IconContext } from 'react-icons'
function Sidebar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
//IconContext allows you to edit each icon within the tag 
    return (
        <>

        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick= {showSidebar}/>
                    <p className='menu-text'>Menu</p>
                </Link>
            </div>
            <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick= {showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineCloseCircle/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
