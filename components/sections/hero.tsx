import Social from './social'

export function Hero() {

    return (
        // <!--hero-section-->
        <div className="container-fluid hero">
            <div className="row">
                <div className="offset-md-1 col-md-9 col-sm-11 float-left" style={{ marginLeft: '10vh', textAlign: 'left' }}>
                    <h1 className="title">Product Engineer | Full stack Developer </h1>
                    <h2 className="display-3"><span role="img" aria-label="waving hands">👋🏽</span> Hi,
                        I Love to build stuff <br />
                        that improve the overall <br />
                        experience of users
                    </h2>
                    <p id="client-msg" className="">
                        I enjoy being part of the entire product development experience from requirement gathering <span role="img" aria-label="note">📋</span> to deployment 🚀🎉
                    </p>
                    <a href="mailto:c.nwaugha@gmail.com" target="_blank" rel="noopener noreferrer" role="button" id="btn-contact">
                        Get In Touch
                    </a>
                </div>
                <Social />
            </div>
        </div>
    )
}

export default Hero