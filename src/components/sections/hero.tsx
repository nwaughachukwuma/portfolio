import React from 'react'
import Social from './social'
import { prefix } from '../../utils/prefix';

export function Hero() {
    return (
        <div className="block w-full h-full px-5 mt-2 sm:px-0 sm:w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="grid sm:mx-auto place-content-center sm:ml-20">
                    <h1 className="mb-2 text-xl font-medium text-gray-900">Product Engineer | Full stack Developer </h1>
                    <h1 className="text-2xl font-bold leading-snug tracking-wider text-gray-900 sm:text-4xl"><span role="img" aria-label="waving hands">👋🏽</span> Hi,
                        I Love to build cool stuff.
                    </h1>
                    <div className="h-auto pt-0.5 w-full sm:w-36 sm:hidden">
                        <Social  />
                    </div>
                </div>
                <div className="hidden mx-auto sm:block">
                    <img className="object-contain object-center" height="380" width="380" src={`${prefix}/images/coder.svg`} alt="Coder illustration, courtesy https://undraw.co" />
                </div>
                <div className="h-40 pl-0.5 w-36 hidden sm:block">
                    <Social  />
                </div>
            </div>
        </div>
    )
}

export default Hero