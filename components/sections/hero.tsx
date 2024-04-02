import React from 'react'
import Social from './social'

export function Hero() {
    return (
        <div className="block mt-2">
            <div className="flex justify-between">
                <div className="grid" style={{ marginLeft: '10vh', textAlign: 'left' }}>
                    <h1 className="font-medium text-xl text-gray-600 mb-2">Product Engineer | Full stack Developer </h1>
                    <h1 className="font-bold text-gray-900 text-5xl tracking-wider leading-snug"><span role="img" aria-label="waving hands">👋🏽</span> Hi,
                        I Love to build stuff <br />
                        that improve the overall <br />
                        experience of users
                    </h1>
                    <p id="client-msg" className="w-80 mt-3 mb-6 text-gray-600 text-opacity-95">
                        I enjoy being part of the entire product development experience from requirement gathering <span role="img" aria-label="note">📋</span> to deployment 🚀🎉
                    </p>
                    <a href="mailto:c.nwaugha@gmail.com" target="_blank" rel="noopener noreferrer" role="button" id="btn-contact" className="bg-blue-400 shadow-md py-3 px-5 w-40 rounded-sm text-center text-white font-semibold text-ms uppercase">
                        Get In Touch
                    </a>
                </div>
                <Social />
            </div>
        </div>
    )
}

export default Hero