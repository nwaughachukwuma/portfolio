import React from 'react'
import Image from 'next/image'

export function NavBar() {

    return (
        // <!--header-->
        <nav className="navbar navbar-expand-md">
            <div className="flex justify-between">
                <div className="flex items-center justify-center">
                    <a className="m-4" href="/">
                        <Image className="rounded-md"  width="50" height="50" src="/assets/images/dev_avatar.png" alt="Dev Avatar" />
                    </a>
                    <h1 className="-mt-2 text-gray-900 text-bold text-opacity-80"><b>Chukwuma NWAUGHA </b></h1>
                </div>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M16.2619 3H3.73733C3.33133 3 3 3.427 3 3.949V4.051C3 4.573 3.33133 5 3.73733 5H16.2619C16.6679 5 17 4.573 17 4.051V3.949C17 3.427 16.6679 3 16.2619 3ZM16.2619 9H3.73733C3.33133 9 3 9.427 3 9.949V10.051C3 10.573 3.33133 11 3.73733 11H16.2619C16.6679 11 17 10.573 17 10.051V9.949C17 9.427 16.6679 9 16.2619 9ZM3.73733 15H16.2619C16.6679 15 17 15.427 17 15.949V16.051C17 16.573 16.6679 17 16.2619 17H3.73733C3.33133 17 3 16.573 3 16.051V15.949C3 15.427 3.33133 15 3.73733 15Z"
                                fill="#2B2F34" />
                        </svg>
                    </span>
                </button> */}
                <div className="navbar-collapse" id="navbarResponsive">
                    <ul className="m-auto">
                        {/* <li class="nav-item d-flex justify-content-center align-items-center">
                            <a class="active nav-link active"
                            id="home" href="index.html">Home</a>
                            </li>

                            <li className="nav-item d-flex justify-content-center align-items-center">
                                <a className="nav-link" id="about"
                                href="about.html">About</a>
                            </li>
                        */}
                        <li className="hidden text-lg text-white bg-indigo-600 py-7 px-9 text-bold sm:block">
                            <a className="flex items-center justify-center" id="contact-button" href="/portfolio">
                                Welcome
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;