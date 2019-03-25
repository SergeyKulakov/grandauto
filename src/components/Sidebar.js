import React from "react";
import tele from '../icons/tele.svg';
import viber from '../icons/viber.svg';
import fb from '../icons/fb.svg';
import inst from '../icons/inst.svg';
import iconfinder from '../icons/iconfinder_ic_phone_android_48px_352066.svg';

export default class Header extends React.Component {
  render() {
    return (
                <div className="sidebar">
                    <div className="line active">главная</div>
                    <div className="line">авто тиз сша</div>
                    <div className="line">авто в украине</div>
                    <div className="line">калькулятор растаможки</div>
                    <div className="line">как это работает</div>
                    <div className="line">контакты</div>
                    <div>
                    <div className="line no-full-width icons">
                        <img src={tele} alt="tele.svg"/>
                        <img src={viber} alt="viber.svg"/>
                        <img src={fb} alt="fb.svg"/>
                        <img src={inst} alt="inst.svg"/>
                    </div>
                    <div className="line no-full-width phone">
                        <img src={iconfinder} alt="iconfinder_ic_phone_android_48px_352066.svg" />
                        <div>+38 (093) 567 35 40</div>
                    </div>
                    <div className="menu-button-background">
                    <button className = "scroll-menu-button">перезвоните мне</button>
                    </div>
                    </div>
                </div>
    );
  }
}