import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Parallax, Mousewheel, EffectCoverflow } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, Parallax, Mousewheel, EffectCoverflow]);


export default function Skills() {

    const skillSwiper = useRef(null);

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
            skillSwiper.update();
        },
        onSwiper: (swiperConf) => {
            skillSwiper.current = swiperConf;
        }
    };

    return (
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
    );
}