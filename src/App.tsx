// App.js - Main Application Component
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WalletConnector from './components/WalletConnect';
import QuickCheck from './components/QuickCheck';
import VerificationResult from './components/VerificationResult';
import Footer from './components/Footer';

// Mock database for claim verification (for MVP demo)
const CLAIM_DATABASE: Record<string, { verdict: string; explanation: string; sources: string[]; hash: string }> = {
  "covid vaccines cause infertility": {
    verdict: "FALSE",
    explanation: "Multiple clinical studies have shown no link between COVID-19 vaccines and fertility issues.",
    sources: ["WHO", "CDC", "NIH"],
    hash: "0x8a72b4f93b3c2f12a9cf45567ad91c5b"
  },
  "election postponed to may": {
    verdict: "FALSE", 
    explanation: "No official announcement has been made by INEC regarding election postponement.",
    sources: ["INEC", "Federal Ministry of Information"],
    hash: "0x7b43c9d82a5f1e9b3a8d6c4f2e1d5c8a"
  },
  "government declares public holiday": {
    verdict: "UNCERTAIN",
    explanation: "This claim cannot be verified at this time. Check official government channels.",
    sources: ["Needs verification"],
    hash: "0xc2d5e6f1a3b5c7d9e8f1a3b5c7d9e8f1"
  },
  "truthcheck": {
    verdict: "TRUE",
    explanation: "TruthCheck is your shield against lies. Verify news and claims instantly with secure blockchain tech.",
    sources: ["Internal verification"],
    hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d"
  }
};

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [currentScreen, setCurrentScreen] = useState('welcome'); // welcome, connect, check, processing, result
  const [currentClaim, setCurrentClaim] = useState('');
  const [verificationResult, setVerificationResult] = useState<{
    verdict: string;
    explanation: string;
    sources: string[];
    hash: string;
  } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const connectWallet = () => {
    // Simulate wallet connection for MVP
    setIsProcessing(true);
    
    setTimeout(() => {
      const mockAddress = "0x" + Math.random().toString(16).substr(2, 8) + "...";
      setWalletAddress(mockAddress);
      setWalletConnected(true);
      setCurrentScreen('check');
      setIsProcessing(false);
    }, 1500);
  };
  
  const checkClaim = (claim: string) => {
    setCurrentClaim(claim);
    setIsProcessing(true);
    setCurrentScreen('processing');
    
    // Simulate verification process
    setTimeout(() => {
      const normalizedClaim = claim.toLowerCase().trim();
      // First check exact matches
      let result = CLAIM_DATABASE[normalizedClaim];
      
      // If no exact match, check if claim contains any keywords
      if (!result) {
        for (const key in CLAIM_DATABASE) {
          if (normalizedClaim.includes(key)) {
            result = CLAIM_DATABASE[key as keyof typeof CLAIM_DATABASE];
            break;
          }
        }
      }
      
      // Default response if nothing found
      if (!result) {
        result = {
          verdict: "UNCERTAIN",
          explanation: "Not enough information to verify this claim. Consider checking official sources.",
          sources: ["No verified sources"],
          hash: "0x" + Math.random().toString(16).substr(2, 40)
        };
      }
      
      setVerificationResult(result);
      setCurrentScreen('result');
      setIsProcessing(false);
    }, 2000);
  };
  
  const resetCheck = () => {
    setCurrentClaim('');
    setVerificationResult(null);
    setCurrentScreen('check');
  };
  
  return (
    <div className="app">
      <Header walletConnected={walletConnected} walletAddress={walletAddress} />
      
      {currentScreen === 'welcome' && (
        <HeroSection onConnectClick={() => setCurrentScreen('connect')} />
      )}
      
      {currentScreen === 'connect' && (
        <WalletConnector 
          isProcessing={isProcessing}
          onConnect={connectWallet} 
        />
      )}
      
      {currentScreen === 'check' && (
        <QuickCheck onSubmit={checkClaim} />
      )}
      
      {currentScreen === 'processing' && (
        <div className="processing-container">
          <div className="processing">
            <div className="spinner"></div>
            <h2>Checking...</h2>
            <p>Searching blockchain and trusted sources...</p>
          </div>
        </div>
      )}
      
      {currentScreen === 'result' && verificationResult && (
        <VerificationResult 
          result={verificationResult}
          claim={currentClaim}
          onCheckAnother={resetCheck}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;