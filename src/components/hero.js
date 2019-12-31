import React from 'react'
import Social from './social'

export function Hero() {

    return (
        // <!--hero-section-->
        <div className="hero container-fluid">
            <div className="row">
                <div className="offset-md-1 col-md-9 col-sm-11">
                    <h1 className="title">Chukwuma NWAUGHA | Product Engineer & Full stack Developer </h1>
                    <h2 className="display-3 offset-md-1">Hello!
                        I Love to build stuff <br /> 
                        that improve the overall <br />
                        experience of users
                    </h2>
                    <p id="client-msg" className="offset-md-3">
                        I answer to individual client project as well as
                        provide solution for products from idea to execution
                    </p>
                    <a href="/cdn-cgi/l/email-protection#bad2dfd6d6d594c0cfd4dbd3dedbc9d6dbd7faddd7dbd3d694d9d5d7" role="button" id="btn-contact">Get In Touch</a>
                </div>

                <Social />
            </div>
        </div>
    )
}

export default Hero