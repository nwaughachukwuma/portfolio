import React from 'react'
import { NavBar, Hero } from 'components/sections'

function HomePage() {
    return <div className="w-screen antialiased app font-lato">
            <div className="w-full sm:pb-8 hero-bg">
                <NavBar />
                <Hero />
            </div>
            {/* <Experience /> */}
            {/* <Footer /> */}
        </div>
    
}

export default HomePage