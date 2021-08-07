import React from "react";

export default function Projects() {
    return (
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
    );
}