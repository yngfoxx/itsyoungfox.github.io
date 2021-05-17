import React, { useRef, useState } from 'react';
import {animated, useSpring} from 'react-spring';
import ReactTypingEffect from 'react-typing-effect';

import logo from '../assets/images/original-favicon.png';
// import profile from '../assets/images/me.jpeg';
import bg from '../assets/images/bg/mountains.jpg';
// import bg from '../assets/images/bg/work.jpg';

// Projects
import logo_exodusleague from '../assets/images/projects/exodusleague_310x310.png';
import logo_eadministration from '../assets/images/projects/eAdministration_269x290.png';
import logo_yngfox from '../assets/images/projects/yngfox_2159x2159.png';
import logo_foxai from '../assets/images/projects/fox_logo.png';
import logo_nuke from '../assets/images/projects/nuke_logo.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectFade, Parallax, Mousewheel, EffectCoverflow } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectFade, Parallax, Mousewheel, EffectCoverflow]);

export default function HomeScreen() {
  const [splash, toggle] = useState(false);
  const props = useSpring({
    to: { opacity: 0, display: 'none' },
    from: { opacity: 1 },
    delay: 4000,
    onRest: () => { toggle(!splash); }
  });

  const skillSwiper = useRef(null);
  // const skillBar = useRef(null);
  const skillSliderConfig = {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    grabCursor: true,
    updateOnWindowResize: true,
    coverflowEffect: {
      rotate: 0,
      stretch: -50,
      depth: 100,
      modifier: 5,
      slideShadows: false,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
      stopOnLastSlide: true
    },
    preloadImages: false,
    watchSlidesProgress: true,
    speed: 800,
    direction: 'horizontal',
    parallax: true,
    mousewheel: false,
    onSlideChange: (skillSwiper) => {
      // let skillOBJ = skillBar.current;
      // let slideTile = document.querySelectorAll('.skill-tile');
      //     slideTile.forEach((item, i) => { item.style.animation = "none"; });
      //     slideTile = slideTile[skillSwiper.realIndex];
      //     slideTile.style.animation = "pulse 2s infinite";
      skillSwiper.update();
    },
    onSwiper: (swiperConf) => {
      skillSwiper.current = swiperConf;
      // let ProgressBar = require('progressbar.js');
      /*let options = {
        color: '#ff5220',
        trailColor: '#0f141ced',
        trailWidth: 1,
        strokeWidth: 3,
        duration: 1400,
        step: function(state, shape) {
          // shape.path.setAttribute('stroke', state.color);
          shape.path.style.strokeLinecap = 'round';
          let perText = shape.path.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[1];
          perText.innerText = (Math.round(shape.value() * 100) + ' %');
        }
      }
      skillBar.current = {
        backend    : new ProgressBar.Circle('#skillbackend', options),
        mysql    : new ProgressBar.Circle('#skillMYSQL', options),
        js     : new ProgressBar.Circle('#skillJS', options),
        html   : new ProgressBar.Circle('#skillHTML', options),
        css    : new ProgressBar.Circle('#skillCSS', options),
        py     : new ProgressBar.Circle('#skillPY', options),
        react  : new ProgressBar.Circle('#skillREACT', options),
        c      : new ProgressBar.Circle('#skillC', options),
        node   : new ProgressBar.Circle('#skillNODE', options),
        java   : new ProgressBar.Circle('#skillJAVA', options)
      };
      let skillOBJ = skillBar.current;
      for (const property in skillOBJ) skillOBJ[property].animate(0.0);
      */
    }
  };



  const mainSwiper = useRef(null);
  const mainSliderConfig = {
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

      if (mainSwiper.realIndex === 1) {
        skillSwiper.current.slideTo(2, 700, false);
      }
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
                <div className="content">
                  <div className="_abt">
                    <div data-swiper-parallax="-300" className="_abt_profile">
                      <img src={logo} alt="Profile"/>
                    </div>
                    <div data-swiper-parallax="-600" className="_abt__desc">
                        <div className="_abt_d_name" data-swiper-parallax="-550">
                          <>
                            <ReactTypingEffect text={["Stephen Adebayo", "What's up?", "My name is Stephen,", "A Creative...", "full-stack developer!", "graphics designer!", "digital artist!", "and multi-talented!"]} />
                          </>
                        </div>
                        <div className="_abt_d_content">
                          My name is Stephen Adebayo Osunrinde, I am a full-stack developer, graphics designer and a digital artist with proficient skill level in designing, developing and managing web applications/websites.
                          I have spent the past { new Date().getFullYear() - 2018 } years honing my skills in web development, game development and software engineering.
                          <br/><br/>
                          Still new to the work force, would love to get in touch with you and your team!
                        </div>
                        <div className="_abt_d_table">
                          <div className="_abt_d_t_row">
                            <div className="_abt_d_t_r_field _name">Residence</div>
                            <div className="_abt_d_t_r_field _value">United Kingdom</div>
                          </div>
                          <div className="_abt_d_t_row">
                            <div className="_abt_d_t_r_field _name">City</div>
                            <div className="_abt_d_t_r_field _value">Hatfield</div>
                          </div>
                          {/*
                          <div className="_abt_d_t_row">
                            <div className="_abt_d_t_r_field _name">Age</div>
                            <div className="_abt_d_t_r_field _value">{ new Date().getFullYear() - 2002 }</div>
                          </div>
                          */}
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
              </SwiperSlide>

              {/* SKILLS SLIDE */}
              <SwiperSlide>
                <div className="content">
                  <div className="content_header_title" data-swiper-parallax="-500">
                    <div className="cht_decrypt">Stack</div>
                    <div className="cht_encrypt"></div>
                  </div>
                  <div className="_scrl_indc" data-swiper-parallax="-400">
                    <div className="icon-down-open-big"></div>
                  </div>
                  <div data-swiper-parallax="-600" className="skill-slider-container">
                    <Swiper {...skillSliderConfig}>
                      <SwiperSlide className="skill-tile">
                        <div className="skill-descrp">
                          <h3 className="skill-title">
                            <span>Back-end stack</span>
                            <span>compt(%)</span>
                          </h3>
                          <div className="skill-list">
                            <div className="skill-list-item"><span>OOP PHP</span><span>85%</span></div>
                            <div className="skill-list-item"><span>MySQL</span><span>80%</span></div>
                            <div className="skill-list-item"><span>Python Flask</span><span>70%</span></div>
                            <div className="skill-list-item"><span>Node.js</span><span>65%</span></div>
                            <div className="skill-list-item"><span>Java EE</span><span>40%</span></div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="skill-tile">
                        <div className="skill-descrp">
                          <h3 className="skill-title">
                            <span>Front-end stack</span>
                            <span>compt(%)</span>
                          </h3>
                          <div className="skill-list">
                            <div className="skill-list-item"><span>React.js</span><span>70%</span></div>
                            <div className="skill-list-item"><span>JavaScript</span><span>80%</span></div>
                            <div className="skill-list-item"><span>CSS/LESS/SASS</span><span>85%</span></div>
                            <div className="skill-list-item"><span>jQuery</span><span>60%</span></div>
                            <div className="skill-list-item"><span>WebRTC</span><span>70%</span></div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="skill-tile">
                        <div className="skill-descrp">
                          <h3 className="skill-title">
                            <span>Software dev</span>
                            <span>compt(%)</span>
                          </h3>
                          <div className="skill-list">
                            <div className="skill-list-item"><span>Python</span><span>75%</span></div>
                            <div className="skill-list-item"><span>Electron.js</span><span>65%</span></div>
                            <div className="skill-list-item"><span>Java</span><span>45%</span></div>
                            <div className="skill-list-item"><span>Android</span><span>45%</span></div>
                            <div className="skill-list-item"><span>Batch script</span><span>40%</span></div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="skill-tile">
                        <div className="skill-descrp">
                          <h3 className="skill-title">
                            <span>Content creation</span>
                            <span>compt(%)</span>
                          </h3>
                          <div className="skill-list">
                            <div className="skill-list-item"><span>MS Office</span><span>80%</span></div>
                            <div className="skill-list-item"><span>Graphics design</span><span>85%</span></div>
                            <div className="skill-list-item"><span>Video editing</span><span>50%</span></div>
                            <div className="skill-list-item"><span>Blender 3D</span><span>30%</span></div>
                            <div className="skill-list-item"><span>Digital Art</span><span>70%</span></div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="skill-tile">
                        <div className="skill-descrp">
                          <h3 className="skill-title">
                            <span>tools</span>
                          </h3>
                          <div className="skill-list">
                            <div className="skill-list-item"><span>Atom</span><span>Figma</span></div>
                            <div className="skill-list-item"><span>Kali Linux</span><span>VMware</span></div>
                            <div className="skill-list-item"><span>Android Studio</span><span>GitHub</span></div>
                            <div className="skill-list-item"><span>Git</span><span>pip</span></div>
                            <div className="skill-list-item"><span>Docker</span><span>XAMPP</span></div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
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
                          <h3>Exodus League - Founder</h3>
                          <ul>
                            <li>Coordinated offline and online events</li>
                            <li>Developed the Exodus League online platform</li>
                            <li>Managed a team of 15 members</li>
                            <li>Contributed to the growth of eSports in Africa</li>
                          </ul>
                          <button className="tile-button">view</button>
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
                            <div className="tile-mob-descrp">Nuke Inc - Founder</div>
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
