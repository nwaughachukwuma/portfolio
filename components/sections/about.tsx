import React, { useEffect, useCallback, useState } from 'react'

export function About() {
    const [screenWidth, setScreenWidth] = useState(null)
    useEffect(() => {
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions)
    })

    const updateWindowDimensions = useCallback(
        ({ target: { innerWidth, innerHeight } }) => {
            console.log('window dimension is: ', innerWidth, innerHeight)
            setScreenWidth(innerWidth)
        },
        [],
    )

    return (
        <div className="block mt-12">
            <div className="grid grid-flow-row grid-cols-2 col-auto space-x-5 gap-x-10">
                <div className="ml-20 col-sm col-md">
                    <h2 className="mb-4 text-5xl font-normal text-grey-900">About me</h2>
                    <p className="text-gray-700">I am Chuks, a Product Engineer and a Full stack Developer with broad experience in delivering first class Vue, React & React Native applications. Over the last 5yrs, I have worked with a Health Tech company, a data & services company, with Hich Inc, a ride-hailing company in Virginia USA, and currently, Latitude Inc. a company that runs a foremost Video Stream on Demand platform in Massachusetts USA.

                        <br /><br />I am up-to-date with current frontend, backend and cloud technologies, and my experience enables me to build prototypes quickly. In cruise mode, I love to supercharge day-to-day G-Suite Apps with Google Apps Script & Cloud Integrations, and finding the best way to optimize streaming data using Message Queues and ETLs.
                        <br /> <br />
                        Finally, I love to read, go hiking & kayaking
                    </p>
                </div>
                <div className="col-sm col-md" style={{ marginLeft: !!screenWidth && screenWidth <= 575 ? '10vh' : '0.5vh', textAlign: 'left' }}>
                    {/* <!-- Experience 🏆--> */}
                    <h2 className="mb-4 text-5xl font-normal text-grey-900"><small><span role="img" aria-label="trophy">👨‍💻</span></small> Experience</h2>
                    <div className="text-gray-700">
                        <b>Summary of skills:</b>
                        <br/>
                        <ol type="a">
                            <li>
                                👉 5+ years experience and 20+ projects completed <br />
                            </li>
                            <li>
                                👉 Good communication skills in native English <br />
                            </li>
                            <li>
                                👉 Practical knowledge in Requirement Analysis and Product backlog management<br />
                            </li>
                            <li>
                                👉 Readily available; 6 days/week <br />
                            </li>
                            <li>
                                👉 Application of Agile principles to software development: <br />
                                <ul className="ml-10">
                                    <li>
                                        - creating intuitive and shippable products at each point
                                    </li>
                                    <li>
                                        - good collaboration with Designers and Developers
                                    </li>
                                </ul>
                            </li>
                            <li>
                                👉 Solid understanding of application development (ground-up):<br />
                                <ul className="ml-10">
                                    <li>
                                        - ability to support from requirements to shipping <span role="img" aria-label="rocket">🚀</span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                               👉 Ability to build scalable web and mobile application<br />
                            </li>
                            <li>
                                👉 <a role="link" target="_blank" rel="noopener noreferrer" href="https://medium.com/@c.nwaugha">Technical writer</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About