import React from "react";
import ReactTypingEffect from 'react-typing-effect';

import logo from '../../assets/images/original-favicon.png';

export default function About() {
  return (
    <div className="content">
        <div className="_abt">
            <div data-swiper-parallax="-300" className="_abt_profile">
            <img src={logo} alt="Profile"/>
            </div>
            <div data-swiper-parallax="-600" className="_abt__desc">
                <div className="_abt_d_name" data-swiper-parallax="-550">
                <>
                    <ReactTypingEffect text={["Hello there!", "My name is Stephen", "A web developer!", "A digital artist!", "and a gamer!"]} />
                </>
                </div>
                <div className="_abt_d_content">
                My name is Stephen Adebayo Osunrinde, I am a full-stack developer, graphics designer and a digital artist with proficient skill level in designing, developing and managing web applications/websites.
                I have spent the past { new Date().getFullYear() - 2018 } years honing my skills in web development, graphic design and software engineering.
                {/* <br/><br/>
                Still new to the work force, would love to get in touch with you and your team! */}
                </div>
                <div className="_abt_d_table">
                    <div className="_abt_d_t_row">
                        <div className="_abt_d_t_r_field _name">Residence</div>
                        <div className="_abt_d_t_r_field _value">United Kingdom</div>
                    </div>
                    <div className="_abt_d_t_row">
                        <div className="_abt_d_t_r_field _name">City</div>
                        <div className="_abt_d_t_r_field _value">London</div>
                    </div>
                </div>
                <div className="_abt_d_socials">
                    <a href="https://github.com/itsYoungFox" target="blank" className="icon-github"> </a>
                    <a href="https://www.instagram.com/yng.fox" target="blank" className="icon-instagram"> </a>
                    <a href="https://www.linkedin.com/in/stephen-osunrinde-465a2b195" target="blank" className="icon-linkedin"> </a>
                </div>
            </div>
        </div>
        <div className="_scrl_indc" data-swiper-parallax="-400">
            <div className="icon-down-open-big"></div>
        </div>
        <div className="bar_01" data-swiper-parallax="-750"></div>
        <div className="bar_02" data-swiper-parallax="-700"></div>
    </div>
  );
}