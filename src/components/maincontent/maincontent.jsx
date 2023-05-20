import React from 'react'

function Maincontent() {
    return (
        <>
            <div className='main-content'>
                <div className='education-content'>
                    <div className='header-container'>
                        Education
                    </div>
                    <ul className='list-education'>
                        <li>
                            <span className='icon-edu'>
                                <ion-icon name="bulb" />
                            </span>
                            <h3 className='header-edu'>
                                Fullstack web developer codecamp 14
                                <span className='box-latest'>latest</span>
                            </h3>
                            <div className='sub-education'>by Software Park Thailand 2023</div>
                        </li>
                        <li>
                            <span className='icon-edu'>
                                <ion-icon name="bulb" />
                            </span>
                            <h3 className='header-edu'>
                                Chulalongkorn University
                            </h3>
                            <div className='sub-education'>Bachelor of Architecture Degree, Faculty of Architecture</div>
                            <div className='sub'>Graduated 2022</div>
                        </li>
                        <li>
                            <span className='icon-edu'>
                                <ion-icon name="bulb" />
                            </span>
                            <h3 className='header-edu'>
                                Mathayomwatsing School
                            </h3>
                            <div className='sub-education'>Science and mathematics program</div>
                        </li>
                    </ul>
                </div>
                <div className='header-container'>
                    Skills
                </div>
                <div className='skill-content'>
                    <div className='technical-skills'>
                        <div className='header-technical-skills'>
                            Technical Skills :
                        </div>
                        <ul className='technical-skills-content'>
                            <li>HTML5,</li>
                            <li>CSS3,</li>
                            <li>Javascript (ES6),</li>
                            <li>Reactjs,</li>
                            <li>Nodejs,</li>
                            <li>Bootstrap,</li>
                            <li>Tailwindcss,</li>
                            <li>Axios,</li>
                            <li>Express,</li>
                            <li>Sequelize,</li>
                            <li>Bcryptjs,</li>
                            <li>JSON-Web-Token,</li>
                            <li>Git,</li>
                            <li>SQL,</li>
                            <li>Adobe creative cloud</li>
                        </ul>
                        <div className='header-technical-skills'>
                            Some experienced on it :
                        </div>
                        <ul className='technical-skills-content'>
                            <li>Python 3,</li>
                            <li>Django,</li>
                            <li>UX/UI design,</li>
                            <li>NoSQL</li>
                        </ul>
                    </div>
                </div>
                <div className='skill-content'>
                    <div className='technical-skills'>
                        <div className='header-technical-skills'>
                            Soft Skills :
                        </div>
                        <ul className='technical-skills-content'>
                            <li>Communication,</li>
                            <li>Teamwork,</li>
                            <li>Empathy,</li>
                            <li>Responsibility,</li>
                            <li>Lifelong Learning</li>
                        </ul>
                    </div>
                </div>
                <div className='education-content'>
                    <div className='header-container workexp'>
                        Work Experiences
                    </div>
                    <ul className='list-education'>
                        <li>
                            <span className='icon-edu'>
                                <ion-icon name="briefcase" size="small" />
                            </span>
                            <h3 className='header-edu'>
                                Love, Architect
                                <span className='box-latest'>latest</span>
                            </h3>
                            <div className='sub-education'>Junior Architect</div>
                            <div className='sub-detail'>
                                Nov 2022 - Jan 2023 | Bangkok, Thailand
                                <ul className='sub-detaill-list'>
                                    <li>Developing Architecture and Interior base on user requirements</li>
                                    <li>learning about how to contribute project as a group project</li>
                                    <li>Be a good worker on working hours and out of work</li>
                                </ul>
                                <a className='more-info' href='https://www.lovearchitectsbkk.com/' >
                                    More information <ion-icon name="caret-forward-outline" size="small" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <span className='icon-edu'>
                                <ion-icon name="briefcase" size="small" />
                            </span>
                            <h3 className='header-edu'>
                                N7A Architect co. ltd.
                            </h3>
                            <div className='sub-education'>Junior Architect (Intern)</div>
                            <div className='sub-detail'>
                                2021 | Bangkok, Thailand
                                <ul className='sub-detaill-list'>
                                    <li>Developing Architecture base on user requirements</li>
                                    <li>learning about how to create mood & tone design concepts</li>
                                    <li>making model as group project</li>
                                </ul>
                                <a className='more-info' href='http://www.n7a.co.th/' >
                                    More information <ion-icon name="caret-forward-outline" size="small" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='education-content'>
                    <div className='header-container'>
                        Technical Project
                    </div>
                    <ul className='list-education'>
                        <li>
                            <span className='icon-edu'>
                                <ion-icon name="code-slash-outline" size="small" />
                            </span>
                            <h3 className='header-edu'>
                                Medium-clone
                                <span className='box-latest'>latest</span>
                            </h3>
                            <div className='sub-education'>keyword: Fullstack project, Personal project, Website, Reactjs, Nodejs</div>
                            <div className='sub-detail'>
                                May 2023 | Bangkok, Thailand
                                <ul className='sub-detaill-list'>
                                    <li>Social media web application</li>
                                    <li>Allows users to authenticate using JSON Web Tokens and perform CRU- operations on user profiles</li>
                                    <li>Users can perform CRUD operations on articles, which are categorized with tags. Articles are displayed in Markdown format, allowing users to easily view and edit the content.</li>
                                    <li>Users can filter articles by tags, view individual articles, articles authored by followed users, favorite articles, and articles authored by themselves.</li>
                                    <li>Tech Stack: Vite.Reactjs, Nodejs, Expressjs, Sequelizejs, Tailwind, Bcryptjs, JWT, Markdown-to-JSX, Axios</li>
                                </ul>
                                <a className='more-info' href='https://github.com/OranWiriya/medium-clone' >
                                    More information <ion-icon name="caret-forward-outline" size="small" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <span className='icon-edu'>
                                <ion-icon name="code-slash-outline" size="small" />
                            </span>
                            <h3 className='header-edu'>
                                Todolist
                            </h3>
                            <div className='sub-education'>keyword: Frontend project, Personal project, Website, Reactjs</div>
                            <div className='sub-detail'>
                                March 2023 | Bangkok, Thailand
                                <ul className='sub-detaill-list'>
                                    <li>Lerning how to developing website with vite build-tool</li>
                                    <li>classify elements by components</li>
                                    <li>Tech Stack: Vite.Reactjs</li>
                                </ul>
                                <a className='more-info' href='https://oranwiriya.github.io/vite-Todolist/' >
                                    More information <ion-icon name="caret-forward-outline" size="small" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Maincontent