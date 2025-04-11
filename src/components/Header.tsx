// components/Header.js
import React from 'react';

interface HeaderProps {
  walletConnected: boolean;
  walletAddress: string;
}

const Header: React.FC<HeaderProps> = ({ walletConnected, walletAddress }) => {
  return (
    <header>
      <div>
        <div className="logo">
          <img src="../img/logo.png" alt="logo" />
          <p>TruthCheck</p>
        </div>
      </div>
      <div>
        <ul>
          <li><a href="#">Quick Check</a></li>
          <li><a href="#">Verified Claims</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div>
        <select name="languages">
          <option value="">ENG</option>
          <option value="">FRE</option>
          <option value="">SPA</option>
        </select>
      </div>
      <div>
        <button className='Btn'>Connect</button>
      </div>
      {walletConnected && (
        <div className="wallet-info">
          <span className="wallet-pill">Connected: {walletAddress}</span>
        </div>
      )}
    </header>
  );
};

export default Header;