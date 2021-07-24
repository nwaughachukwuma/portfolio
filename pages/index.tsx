import React from 'react'
import { Footer, NavBar, Hero, Experience } from 'components/sections'

function HomePage() {
    return <div className="app font-lato antialiased">
            <NavBar />
            <Hero />
            <Experience />
            <Footer />
        </div>
    
}

export default HomePage