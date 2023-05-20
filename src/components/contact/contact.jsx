import React from 'react'

function Contact() {
    return (
        <>
            <div>
                <div className='header-container header-contact'>
                    Get in Touch
                </div>
                <div className='contact-content'>
                    <a href="https://github.com/OranWiriya" >
                        github <ion-icon name="logo-github" size="small" />
                    </a>
                    <a href="https://www.linkedin.com/in/oran-wiriya-ab5088206/" >
                        Linkedin <ion-icon name="logo-linkedin" size="small" />
                    </a>
                    <a href="tel:+66632319279" >
                        (+66)63-231-9279 <ion-icon name="call" size="small" />
                    </a>
                    <a href="mail:wiriya.oran@gmail.com" >
                        wiriya.oran@gmail.com <ion-icon name="mail" size="small" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact