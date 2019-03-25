import React, { Component } from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import './App.css';

class App extends Component {

componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
}

componentWillUnmount() {
  window.removeEventListener("scroll", this.scrollFunction);
}

scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("scroll-menu-background")[0].style.padding = "0";
    document.getElementsByClassName("scroll-menu-background")[0].style.height = "0";
    for (let i = 0;i < document.querySelectorAll(".scroll-menu > div").length; i++) {
          document.querySelectorAll(".scroll-menu > div")[i].style.transform = "scale(0)";
    }
    document.getElementsByClassName("scroll-logo")[0].style.transform = "scale(0)";
  } else {
    document.getElementsByClassName("scroll-menu-background")[0].style.padding = "16px 0";
    document.getElementsByClassName("scroll-menu-background")[0].style.height = "100px";
    for (let i = 0;i < document.querySelectorAll(".scroll-menu > div").length; i++) {
          document.querySelectorAll(".scroll-menu > div")[i].style.transform = "scale(1)";
    }
    document.getElementsByClassName("scroll-logo")[0].style.transform = "scale(1)";
  }
}
  render() {
    return (
<div className="App">
    <Header/>
    <Sidebar/>
    <Home/>
    <div className="tester"></div>
</div>
    );
  }
}

export default App;
