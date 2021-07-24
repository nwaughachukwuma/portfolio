import React from 'react'
import Social from './social'

export function Hero() {
    return (
        <div className="block mt-2">
            <div className="flex justify-between">
                <div className="grid" style={{ marginLeft: '10vh', textAlign: 'left' }}>
                    <h1 className="mb-2 text-xl font-medium text-gray-600">Product Engineer | Full stack Developer </h1>
                    <h1 className="text-5xl font-bold leading-snug tracking-wider text-gray-900"><span role="img" aria-label="waving hands">👋🏽</span> Hi,
                        I Love to build stuff <br />
                        that improve the overall <br />
                        experience of users
                    </h1>
                    <p id="client-msg" className="mt-3 mb-5 text-gray-600 w-80 text-opacity-95">
                        I enjoy being part of the entire product development experience from requirement gathering <span role="img" aria-label="note">📋</span> to deployment 🚀🎉
                    </p>
                    <a href="mailto:c.nwaugha@gmail.com" target="_blank" rel="noopener noreferrer" role="button" id="btn-contact" className="w-40 px-5 py-3 font-semibold text-center text-white uppercase bg-indigo-600 rounded-md shadow-md text-ms">
                        Get In Touch
                    </a>
                </div>
                <Social />
            </div>
        </div>
    )
}

export default Hero