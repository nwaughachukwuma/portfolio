import React from 'react'


export function About() {


    return (
        <div className="container-fluid">
            <div class="row no-gutters">
                <div class="col-sm col-md" style={{marginLeft: '10vh', textAlign: 'left'}}>
                    <h2 class="display-3 about-header">About me</h2>
                    <p class="info">I am Chukwuma Nwaugha, a Product Engineer & Full stack Developer. Over the last 3yrs, I have gone from working with a Health Tech. company to a data and services company and, currently, to a ride-hailing company in Virginia USA. 

                    <br/><br/>I am up-to-date with current frontend, backend, and cloud technologies, and I have a keen understanding of key DevOps concepts such as CI/CD. 
                    <br /><br/>Fundamentally, I love supercharging day-to-day applications like Google Forms and Spreadsheets with Google Apps Script and Cloud Integrations.
                    <br /> <br />
                    Finally, I love to read books, go hiking & kayaking.
                    </p>
                </div>
                <div class="col-sm col-md" style={{ textAlign: 'left'}}>
                    {/* <!-- Experience --> */}
                    <h2 class="display-3 about-header">🏆 Experience</h2>
                    <p class=" info">
                        <b>Responsibilities:</b><br/>
                        • Requirement Analysis<br/>
                        • Conducting user research<br/>
                        • Developing wireframes and task flows based on user's needs<br/>
                        • Interface Design<br/>
                        • Prototyping Design<br/>
                        • Usability Testing<br/>
                        • Collaborating with Designers and Developers to create intuitive, user-friendly software
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About