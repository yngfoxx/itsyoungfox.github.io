import React, { useRef, useState } from 'react';
import {animated, useSpring} from 'react-spring';
import ReactTypingEffect from 'react-typing-effect';

import logo from '../assets/images/original-favicon.png';
// import profile from '../assets/images/me.jpeg';
import bg from '../assets/images/bg/mountains.jpg';
// import bg from '../assets/images/bg/work.jpg';

// Components
import About from '../components/Home/About';
import Skills from '../components/Home/Skills';

// Projects
import logo_exodusleague from '../assets/images/projects/exodusleague_310x310.png';
import logo_eadministration from '../assets/images/projects/eAdministration_269x290.png';
import logo_yngfox from '../assets/images/projects/yngfox_2159x2159.png';
import logo_foxai from '../assets/images/projects/fox_logo.png';
import logo_nuke from '../assets/images/projects/nuke_logo.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectCube, Parallax, Mousewheel, EffectCoverflow } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCube, Parallax, Mousewheel, EffectCoverflow]);

export default function HomeScreen() {
  const [splash, toggle] = useState(false);
  const props = useSpring({
    to: { opacity: 0, display: 'none' },
    from: { opacity: 1 },
    delay: 4000,
    onRest: () => { toggle(!splash); }
  });


  const mainSwiper = useRef(null);
  const mainSliderConfig = {
    effect: "cube",
    preloadImages: false,
    watchSlidesProgress: true,
    speed: 800,
    direction: 'vertical',
    hashNavigation: {
      watchState: true,
    },
    pagination: { clickable: true },
    parallax: true,
    mousewheel: true,
    updateOnWindowResize: true,
    onSlideChange: (mainSwiper) => {
      let menuBtn = document.querySelectorAll('._nav_slider');
      menuBtn.forEach((btn, n) => {
        if (n === mainSwiper.realIndex) {
          btn.setAttribute('data-menu', 'active');
          // move activeNav element to btn position
          let navBarActive_top = document.getElementById('activeNav').children[0];
          navBarActive_top.style.height = btn.offsetTop+'px';
        }
        if (n !== mainSwiper.realIndex) btn.setAttribute('data-menu', 'inactive');
      });

      if (mainSwiper.realIndex !== 0) {
        let tileTitle = document.getElementsByClassName('content_header_title')[(mainSwiper.realIndex - 1)];
        window.startdecrypt(tileTitle.children[0], tileTitle.children[1]);
      }

      // if (mainSwiper.realIndex === 1) {
      //   skillSwiper.current.slideTo(2, 700, false);
      // }
    },
    onSwiper: (swiperConf) => {
      mainSwiper.current = swiperConf;
    }
  };

  function navHandleClick(e) {
    let clickedBtn = e.currentTarget;
    let btnClass = document.querySelectorAll("[class='"+clickedBtn.className+"']");
    btnClass.forEach((btn, n) => {
      if (btn === clickedBtn) mainSwiper.current.slideTo(n, 700, false);
    });
  }


  return (
    <div className="submain">
      <animated.div className="loader-wrapper" style={props}>
        <div className="loader-content">
          <img src={logo} alt="logo"/>
        </div>
      </animated.div>
      <div className="sm_root">

        <div className="nav_bar">
          <div className="nav_selected" id="activeNav">
            <div data-pos="top"></div>
            <div data-pos="bottom"></div>
          </div>
          <a href="#about" className="nav_bar_btn _menu"><i className="icon-stephen-adebayo" style={{backgroundImage: `url(${logo})`}}></i><span> Stephen Adebayo</span></a>
          <a href="#about" onClick={navHandleClick} className="nav_bar_btn _nav_slider" data-menu="active"><i className="icon-user-circle"></i><span> About</span></a>
          <a href="#stack" onClick={navHandleClick} className="nav_bar_btn _nav_slider"><i className="icon-code"></i><span> Stack</span></a>
          {/*<a href="#certification" onClick={navHandleClick} className="nav_bar_btn _nav_slider"><i className="icon-graduation-cap"></i><span> Certification</span></a>*/}
          <a href="#projects" onClick={navHandleClick} className="nav_bar_btn _nav_slider"><i className="icon-back-in-time"></i><span> Projects</span></a>
          <a href="#contact" onClick={navHandleClick} className="nav_bar_btn _nav_slider"><i className="icon-vcard"></i><span> Contact</span></a>
        </div>

        <div className="smr_section_main">
          <Swiper {...mainSliderConfig}>

              <div className="parallax-bg" data-swiper-parallax="-23%" style={{backgroundImage: `url(${bg})`}}>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
              </div>

              {/* ABOUT SLIDE */}
              <SwiperSlide>
                <About />
              </SwiperSlide>

              {/* SKILLS SLIDE */}
              <SwiperSlide>
                <Skills />  
              </SwiperSlide>

              {/* PROJECTS SLIDE */}
              <SwiperSlide>
                <div className="content">
                  <div className="content_header_title" data-swiper-parallax="-500">
                    <div className="cht_decrypt">Projects</div>
                    <div className="cht_encrypt"></div>
                  </div>
                  <div className="_scrl_indc" data-swiper-parallax="-400">
                    <div className="icon-down-open-big"></div>
                  </div>
                  <div data-swiper-parallax="-600" className="grid-container">
                    <div className="grid-row">

                      <div data-role="tile" data-size="large" data-swiper-parallax="-200">
                        <div className="tile-child tile-logo">
                          <img src={logo_exodusleague} alt="exodus league" style={{width: "100%"}}/>
                          <div className="tile-mob-descrp">Exodus League - Founder</div>
                        </div>
                        <div className="tile-child tile-descrp">
                          <h3>Exodus League</h3>
                          <ul>
                            <li>Coordinating offline and online events</li>
                            <li>Web/Software Developer of the Exodus League online platform</li>
                            <li>Managing a team of 15 members</li>
                            <li>Contributing to the growth of eSports in Africa</li>
                          </ul>
                          <a href="https://exodusleague.com" className="tile-button">view</a>
                        </div>
                      </div>

                      <div data-role="tile-group">
                        <div data-role="tile" data-size="wide" data-swiper-parallax="-450">
                          <div className="tile-child tile-logo">
                            <div className="jds_logo_el">JDS</div>
                            <div className="tile-mob-descrp">Joint Downloading System - Final Year Project</div>
                          </div>
                        </div>
                        <div data-role="tile" data-size="medium" data-swiper-parallax="-500">
                          <div className="tile-child tile-logo">
                            <img src={logo_eadministration} alt="eAdministration"/>
                            <div className="tile-mob-descrp">eAdministration (Aptech) - Final eProject</div>
                          </div>
                        </div>
                        <div data-role="tile" data-size="medium" data-swiper-parallax="-600">
                          <div className="tile-child tile-logo">
                            <img src={logo_yngfox} style={{borderRadius: "10px"}} alt="YNG.FOX"/>
                            <div className="tile-mob-descrp">Digital art - Gallery</div>
                          </div>
                        </div>
                      </div>

                      <div data-role="tile-group">
                        <div data-role="tile" data-size="medium" data-swiper-parallax="-400">
                          <div className="tile-child tile-logo">
                            <img src={logo_foxai} alt="Fox AI"/>
                            <div className="tile-mob-descrp">AI - Fox (cross-platform) Personal Assistant</div>
                          </div>
                        </div>
                        <div data-role="tile" data-size="medium" data-swiper-parallax="-300">
                          <div className="tile-child tile-logo">
                            <img src={logo_nuke} style={{borderRadius: "10px"}} alt="Nuke"/>
                            <div className="tile-mob-descrp">Nuke Dev - Founder & Technical Lead</div>
                          </div>
                        </div>
                        <div data-role="tile" data-size="medium" data-swiper-parallax="-600">
                          <div className="tile-child tile-logo">
                            <img src={logo} alt="coming soon"/>
                            <div className="tile-mob-descrp">Coming soon</div>
                          </div>
                        </div>
                        <div data-role="tile" data-size="medium" data-swiper-parallax="-650">
                          <div className="tile-child tile-logo">
                            <img src={logo} alt="coming soon"/>
                            <div className="tile-mob-descrp">Coming soon</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* CONTACT SLIDE */}
              <SwiperSlide>
                <div className="content">
                  <div className="content_header_title" data-swiper-parallax="-500">
                    <div className="cht_decrypt">Contact me</div>
                    <div className="cht_encrypt"></div>
                  </div>
                  {/*
                  <div data-swiper-parallax="-300">Slide 5</div>
                  <div data-swiper-parallax="-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                  */}
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
