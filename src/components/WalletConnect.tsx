
// components/WalletConnector.js
import React from 'react';

interface WalletConnectorProps {
  isProcessing: boolean;
  onConnect: () => void;
}

const WalletConnector: React.FC<WalletConnectorProps> = ({ isProcessing, onConnect }) => {
  return (
    <div className="wallet-connector">
      <h2>Connect Your Wallet</h2>
      {isProcessing ? (
        <div className="connecting">
          <div className="spinner"></div>
          <p>Connecting to wallet...</p>
        </div>
      ) : (
        <div className="wallet-options">
          <button className="wallet-option" onClick={onConnect}>
            <img src="../assets/metamask.png" alt="MetaMask" />
            <span>MetaMask</span>
          </button>
          <button className="wallet-option" onClick={onConnect}>
            <img src="../assets/trustwallet.png" alt="Trust Wallet" />
            <span>Trust Wallet</span>
          </button>
          <button className="wallet-option" onClick={onConnect}>
            <img src="../assets/walletconnect.png" alt="WalletConnect" />
            <span>WalletConnect</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnector;