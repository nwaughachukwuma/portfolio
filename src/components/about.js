import React, {useEffect, useCallback, useState} from 'react'


export function About() {

    const [screenWidth, setScreenWidth] = useState(null)
    useEffect(() => {
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions)
    })

    const updateWindowDimensions = useCallback(
        ({target: {innerWidth, innerHeight}}) => {
            console.log('window dimension is: ', innerWidth,  innerHeight)
            setScreenWidth(innerWidth)
        },
        [],
    )

    return (
        <div className="container-fluid">
            <div className="row no-gutters">
                <div className="col-sm col-md" style={{marginLeft: '10vh', textAlign: 'left'}}>
                    <h2 className="display-3 about-header">About me</h2>
                    <p className="info">I am Chukwuma Nwaugha, a Product Engineer & Full stack Developer. Over the last 3yrs, I have gone from working with a Health Tech. company to a data and services company and, currently, to a ride-hailing company in Virginia USA. 

                    <br/><br/>I am up-to-date with current frontend, backend, and cloud technologies, and I have a keen understanding of key DevOps concepts such as CI/CD. 
                    <br /><br/>Fundamentally, I love supercharging day-to-day applications like Google Forms and Spreadsheets with Google Apps Script and Cloud Integrations.
                    <br /> <br />
                    Finally, I love to read, go hiking & kayaking
                    </p>
                </div>
                <div className="col-sm col-md" style={{ marginLeft: !!screenWidth && screenWidth <= 575? '10vh': '0.5vh', textAlign: 'left'}}>
                    {/* <!-- Experience 🏆--> */}
                    <h2 className="display-3 about-header"><small><span role="img" aria-label="trophy">👨‍💻</span></small> Experience</h2>
                    <div className=" info">
                        <b>Summary of skills:</b><br/>
                        <ul>
                            <li>
                                5+ years experience and 20+ projects completed <br/>
                            </li>
                            <li>
                                Good communication skills in native English <br/>
                            </li>
                            <li>
                                Practical knowledge in Requirement Analysis and Product backlog management<br/>                               
                            </li>
                            <li>
                                Readily available; 6 days/week <br/>
                            </li>
                            <li>
                                Application of Agile principles to software development: <br/>
                                <ul>
                                    <li>
                                        Creating intuitive and shippable products at each point
                                    </li>
                                    <li>
                                        Good collaboration with Designers and Developers 
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Solid understanding of application development (ground-up):<br/>
                                <ul>
                                    <li>
                                        Ability to support from requirements to shipping <span role="img" aria-label="rocket">🚀</span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Ability to build scalable web and mobile application<br/>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@c.nwaugha">Technical writer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About