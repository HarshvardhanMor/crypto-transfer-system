import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="https://cryptoverse.hypnosys.in" target="_blank" rel="noreferrer"><p className="text-white text-base text-center mx-2 cursor-pointer">Market</p></a>
        <a href="mailto:kryptsupport@hypnosys.in" target="_blank" rel="noreferrer"><p className="text-white text-base text-center mx-2 cursor-pointer">Support</p></a>
        <a href="https://cryptoverse.hypnosys.in/news" target="_blank" rel="noreferrer"><p className="text-white text-base text-center mx-2 cursor-pointer">News</p></a>
        <a href="https://hypnosys.in" target="_blank" rel="noreferrer"><p className="text-white text-base text-center mx-2 cursor-pointer">Hypnosys</p></a>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Post your doubt or query</p>
      <a href="mailto:krypt@hypnosys.in" target="_blank" rel="noreferrer"><p className="text-white text-sm text-center font-medium mt-2">krypt@hypnosys.in</p></a>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">Made by Hypnosys</p>
      <p className="text-white text-right text-xs">Special Thanks to Adrian Hajdin</p>
    </div>
  </div>
);

export default Footer;
