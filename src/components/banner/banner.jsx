import React from 'react'
import Typewriter from 'typewriter-effect'
import iconFlowers from "../../assets/pictures/flower.png"
import profilePic from "../../assets/pictures/profile_pic.jpg"

function Banner() {
    return (
        <>
            <div className='banner'>
                <div className='banner-content'>
                    <img src={iconFlowers} alt="flowers" className='inline-block flowers w-9 -translate-y-2' />
                    <span className='banner-hello'>
                        สวัสดี / Hello I'm
                    </span>
                    <div className='banner-name'>
                        Oran Wiriya
                    </div>
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'Fullstack Developer', 'Frontend Developer', 'Part-time Architect', 'Designer', 'Gamer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <a className='resume' href="files/Oran_Wiriya_resume_2023.pdf" target="_blank" rel="noopener noreferrer">
                        &lt;Download Resume /&gt;
                    </a>
                </div>
                <img src={profilePic} alt="profilepic" className='profilepic absolute w-80 left-[66vw] top-[30vh] rounded-full z-10' />
                <div className='shadow-profile'>
                    <div className='shadow-profile-item'></div>
                </div>
            </div>
        </>
    )
}

export default Banner