import React, { useEffect, useCallback, useState } from 'react'

export function About() {
    return (
        <div className="block mt-4 sm:mt-12">
            <div className="flex grid grid-cols-1 col-auto space-x-0 space-y-5 sm:space-x-5 sm:grid-cols-2 sm:grid-flow-row flex-cols gap-x-10">
                <div className="ml-10 sm:ml-20">
                    <h2 className="mb-4 text-4xl font-normal sm:text-5xl text-grey-900">About me</h2>
                    <p className="text-sm text-gray-700 sm:text-md">I am Chuks, a Product Engineer and a Full stack Developer with broad experience in delivering first class Vue, React & React Native applications. Over the last 5yrs, I have worked with a Health Tech company, a data & services company, with Hich Inc, a ride-hailing company in Virginia USA, and currently, Latitude Inc. a company that runs a foremost Video Stream on Demand platform in Massachusetts USA.

                        <br /><br />I am up-to-date with current frontend, backend and cloud technologies, and my experience enables me to build prototypes quickly. In cruise mode, I love to supercharge day-to-day G-Suite Apps with Google Apps Script & Cloud Integrations, and finding the best way to optimize streaming data using Message Queues and ETLs.
                        <br /> <br />
                        Finally, I love to read, go hiking & kayaking
                    </p>
                </div>
                <div className="pl-10 sm:pl-0 sm:ml-0">
                    {/* <!-- Experience 🏆--> */}
                    <h2 className="mb-4 text-4xl font-normal sm:text-5xl text-grey-900"> Experience</h2>
                    <div className="text-gray-700">
                        <b>Summary of skills:</b>
                        <br/>
                        <ol type="a" className="text-sm sm:text-md">
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