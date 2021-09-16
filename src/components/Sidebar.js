import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <>
            <nav className='wrapper-nav'>
                <div className='nav-menu'>
                    <ul className='nav-menu-items'>
                        <a href='#home'>
                            <li className='nav-items'>
                                home
                            </li>
                        </a>
                        <a href='#projects'>
                            <li className='nav-items'>
                                projects
                            </li>
                        </a>
                        <a href='#about'>
                            <li className='nav-items'>
                                about me
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="blank">
                </div>
            </nav>
        </>
    );
}

export default Sidebar;
