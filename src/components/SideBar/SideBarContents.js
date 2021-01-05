import React from 'react';
import {
    FaHome,
    FaUsers,
    FaSms,
    FaUserFriends,
    FaGamepad,
    FaSignOutAlt,
    FaIdBadge,
    FaCog,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

//Dashboard and profile will need access to local storage to in order to make get requests to retrieve data
//Logout button will delete local storage and will link back to landing page on a clean slate

export default function NavBarContents(props) {
    return (
        <div>
            <div>
                <div className='side-bar'>
                    <div className='logo'>
                        <span>Icon</span>
                        <span className='nav-title'>GSN</span>
                    </div>
                    <section className='search-field'>
                        <input type='text' placeholder='Search...'></input>
                    </section>
                    <div className='home-btn'>
                        <Link
                            to='/dashboard'
                            onClick={(event) => event.preventDefault()}
                        >
                            <button>
                                <span>
                                    <FaHome />
                                </span>
                                <span className='home'>Dashboard</span>
                            </button>
                        </Link>
                    </div>

                    <div className='home-btn'>
                        <Link
                            to='/:username'
                            onClick={(event) => event.preventDefault()}
                        >
                            <button>
                                <span>
                                    <FaIdBadge />
                                </span>
                                <span className='home'>Profile</span>
                            </button>
                        </Link>
                    </div>

                    <div className='dropdown'>
                        <span className='nav-category'>
                            <span className='category'>Connect</span>
                        </span>
                        <div className='dropdown-content'>
                            <button>
                                <span>
                                    <FaUsers />
                                </span>
                                <span className='dd-label'>Groups</span>
                            </button>
                            <button>
                                <span>
                                    <FaSms />
                                </span>
                                <span className='dd-label'>Chat</span>
                            </button>
                            <button>
                                <span>
                                    <FaUserFriends />
                                </span>
                                <span className='dd-label'>Friends</span>
                            </button>
                            <button>
                                <span>
                                    <FaGamepad />
                                </span>
                                <span className='dd-label'>Games</span>
                            </button>
                        </div>
                    </div>

                    <div className='dropdown'>
                        <span className='nav-category'>
                            <span className='category'>Create</span>
                        </span>
                        <div className='dropdown-content'>
                            <button>
                                <span>
                                    <FaUsers />
                                </span>
                                <span className='dd-label'>
                                    Create new Group
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className='home-btn settings-btn'>
                        <button>
                            <span>
                                <FaCog />
                            </span>
                            <span className='home'>Settings</span>
                        </button>
                    </div>

                    <div className='home-btn log-out'>
                        <button>
                            <span>
                                <FaSignOutAlt />
                            </span>
                            <span className='home'>Log Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}