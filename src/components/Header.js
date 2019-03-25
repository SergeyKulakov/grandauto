import React from "react";
import logoLight from '../logo/Logo white.svg';
import logoDark from '../logo/Logo color.svg';
import tele from '../icons/tele.svg';
import viber from '../icons/viber.svg';
import fb from '../icons/fb.svg';
import inst from '../icons/inst.svg';
import iconfinder from '../icons/iconfinder_ic_phone_android_48px_352066.svg';
import close from '../icons/close.svg';

export default class Header extends React.Component {
    constructor(props) {
    super(props);
    this.state = { imgSrc: logoLight };
    this.dropMenu = this.dropMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    } 

dropMenu() {
    document.getElementsByClassName("scroll-menu-background")[0].style.display = 'none';  
    for (let i = 0;i < document.querySelectorAll("ul.js-scroll-nav li").length; i++) {
        document.querySelectorAll("ul.js-scroll-nav li")[i].style.transform = "scale(0)";
    }
    document.getElementsByClassName("shadow")[0].style.boxShadow = 'none'; 
    document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
    this.setState({ imgSrc: logoDark});
    document.getElementsByClassName("sidebar")[0].style.display = 'block'; 
    document.getElementsByClassName("hamburger-box")[0].style.display = 'none';
    document.getElementsByClassName("cross")[0].style.display = 'block';  
}

hideMenu() {
    for (let i = 0;i < document.querySelectorAll("ul.js-scroll-nav li").length; i++) {
        document.querySelectorAll("ul.js-scroll-nav li")[i].style.transform = "scale(1)";
    }  
    document.getElementsByClassName("shadow")[0].style.boxShadow = '0px 6px 25px -2px rgba(0,0,0,1)';  
    document.getElementsByTagName("nav")[0].style.backgroundColor = "#2D2D37";
    this.setState({ imgSrc: logoLight});
    document.getElementsByClassName("sidebar")[0].style.display = 'none';
    document.getElementsByClassName("hamburger-box")[0].style.display = 'block';
    document.getElementsByClassName("cross")[0].style.display = 'none';  
}

  render() {
    return (
<header id="js-header" className="u-header u-header--sticky-top u-header--change-appearance shadow" data-header-fix-moment="100">
        <div className="scroll-menu-background">
            <div className="scroll-menu">
                <img className="g-width-235 g-width-225--md d-block scroll-logo" src={logoDark} alt="Grand Auto" data-header-fix-moment-exclude="d-block" data-header-fix-moment-classes="d-none"/>
                <div>
                    <div>Мы в соцсетях:</div>
                    <img src={tele} alt="tele.svg"/>
                    <img src={viber} alt="viber.svg"/>
                    <img src={fb} alt="fb.svg"/>
                    <img src={inst} alt="inst.svg"/>
                </div>
                <div>
                    <img src={iconfinder} alt="iconfinder_ic_phone_android_48px_352066.svg" />
                    <div>+38 (093) 567 35 40</div>
                    <button className="scroll-menu-button">перезвоните мне</button>
                </div>
            </div>
        </div>
    <div id="header" className="u-header__section g-bg-black-opacity-0_7 g-transition-0_3 dark-theme g-bg-black-opacity-0_4" data-header-fix-moment-exclude="dark-theme g-bg-black-opacity-0_4" data-header-fix-moment-classes="light-theme u-theme-shadow-v1 g-bg-white g-py-10--md">
        <nav className="navbar navbar-expand-lg p-0 g-px-15">
            <div className="container g-pos-rel">
                <a href="https://grandauto.com.ua/" className="g-hidden-lg-up navbar-brand mr-0">
                    <img id="logo-light-responsive" className="g-width-140 g-width-160--md d-block" src={this.state.imgSrc} alt="Image Description" data-header-fix-moment-exclude="d-block" data-header-fix-moment-classes="d-none"/>

                </a>

                <div className="g-ml-5 collapse navbar-collapse align-items-center flex-sm-row" id="navBar">
                <div className="scroll-width">
                    <ul className="js-scroll-nav navbar-nav align-items-lg-center text-uppercase g-font-weight-700 g-letter-spacing-1 g-font-size-12 g-pt-20 g-pt-0--lg" data-splitted-breakpoint="992">
                        <li className="nav-item g-ml-30--lg g-letter-spacing-0">
                            <a href="https://grandauto.com.ua/#contact" className="btn g-font-weight-700  btn-xl u-btn-primary rounded-0">
                                Главная
                            </a>
                        </li>
                        <li className="nav-item g-ml-30--lg g-letter-spacing-0">
                            <a href="https://grandauto.com.ua/#contact" className="btn g-font-weight-700  btn-xl u-btn-gray rounded-0">
                                Авто из США
                            </a>
                        </li>
                        <li className="nav-item g-ml-30--lg g-letter-spacing-0">
                            <a href="https://grandauto.com.ua/#contact" className="btn g-font-weight-700  btn-xl u-btn-gray rounded-0">
                                Авто в Украине
                            </a>
                        </li>
                        <li className="nav-item g-ml-30--lg g-letter-spacing-0">
                            <a href="https://grandauto.com.ua/#contact" className="btn g-font-weight-700  btn-xl u-btn-gray rounded-0">
                                Калькулятор Разтаможки
                            </a>
                        </li>
                        <li className="nav-item g-ml-30--lg g-letter-spacing-0">
                            <a href="https://grandauto.com.ua/#contact" className="btn g-font-weight-700  btn-xl u-btn-gray rounded-0">
                                Как это работает
                            </a>
                        </li>
                        <li className="nav-item g-ml-30--lg g-letter-spacing-0">
                            <a href="https://grandauto.com.ua/#contact" className="btn g-font-weight-700  btn-xl u-btn-gray rounded-0">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </div>    
                </div>

                <button className="navbar-toggler btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-right-0" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                <span className="hamburger hamburger--slider">
                  <span className="hamburger-box" onClick={this.dropMenu}>
                    <span className="hamburger-inner"></span>
                  </span>
                  <span className="cross" onClick={this.hideMenu}><img src={close} alt="close.svg"/></span>
                </span>
                </button>
            </div>
        </nav>
    </div>
  </header>
    );
  }
}