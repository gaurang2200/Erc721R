import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between py-8 md:px-24 px-6 bg-transparent z-40">
        <a href="#">
          <p className="text-3xl font-bold text-white">
            ERC721R
          </p>
        </a>
        <button className="rounded-3xl p-0.5 bg-cyan-500">
          <p className="font-bold rounded-3xl py-2 px-4 bg-black text-white flex flex-row">
            Connect &nbsp;<span style={{color: 'red'}}>&#8226;</span>
          </p>
        </button>
      </div>
    </header>
  );
};

export default Header;
