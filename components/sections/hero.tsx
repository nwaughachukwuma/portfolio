import React from 'react'
import Social from './social'
import Image from 'next/image'

export function Hero() {
    return (
        <div className="block w-full px-5 mt-2 sm:px-0 sm:w-full">
            <div className="flex justify-between">
                <div className="grid mx-auto sm:ml-20">
                    <h1 className="mb-2 text-xl font-medium text-gray-900">Product Engineer | Full stack Developer </h1>
                    <h1 className="text-2xl font-bold leading-snug tracking-wider text-gray-900 sm:text-4xl"><span role="img" aria-label="waving hands">👋🏽</span> Hi,
                        I Love to build stuff <br />
                        that improve the overall <br />
                        experience of users
                    </h1>
                    <p id="client-msg" className="mt-3 mb-5 text-gray-900 text-md sm:text-lg w-80">
                        I enjoy being part of the entire product development experience from requirement gathering <span role="img" aria-label="note">📋</span> to deployment 🚀🎉
                    </p>
                    <a href="mailto:c.nwaugha@gmail.com" target="_blank" rel="noopener noreferrer" role="button" id="btn-contact" className="flex items-center justify-center w-full px-5 py-3 font-semibold text-white uppercase bg-indigo-600 rounded-md shadow-lg sm:w-40 text-ms">
                        Get In Touch
                    </a>
                    <div className="h-auto pt-0.5 w-full sm:w-36 sm:hidden">
                        <Social  />
                    </div>
                </div>
                <div className="justify-start hidden sm:flex">
                    <Image className="-mt-20" height="380" width="380" objectFit="contain" objectPosition="center" src="/assets/images/coder.svg" alt="Coder illustration, courtesy https://undraw.co" />
                </div>
                <div className="h-40 pl-0.5 w-36 hidden sm:block">
                    <Social  />
                </div>
            </div>
        </div>
    )
}

export default Hero