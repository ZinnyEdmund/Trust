// components/VerificationResult.js
import React from 'react';

interface VerificationResultProps {
  result: {
    verdict: string;
    explanation: string;
    sources: string[];
    hash: string;
  };
  claim: string;
  onCheckAnother: () => void;
}

const VerificationResult: React.FC<VerificationResultProps> = ({ result, claim, onCheckAnother }) => {
  // Get color based on verdict
const getColor = (verdict: string): string => {
    switch(verdict) {
        case 'TRUE': return 'green';
        case 'FALSE': return 'red';
        default: return 'yellow';
    }
};
  
  return (
    <div className={`verification-result ${getColor(result.verdict).toLowerCase()}`}>
      <div className="result-header">
        <span className="verdict">{result?.verdict}</span>
      </div>
      
      <div className="claim-box">
        <h3>Claim checked:</h3>
        <p>"{claim}"</p>
      </div>
      
      <div className="explanation">
        <h3>Explanation:</h3>
        <p>{result?.explanation}</p>
      </div>
      
      <div className="sources">
        <h3>Sources:</h3>
        <ul>
      {result.sources.map((source, index) => (
          <li key={index}>{source}</li>
      ))}
        </ul>
      </div>
      
      <div className="blockchain-verification">
        <p>Verified on Blockchain</p>
        <div className="hash">Hash: {result?.hash}</div>
      </div>
      
      <button onClick={onCheckAnother} className="check-another-btn">
        Check Another Claim
      </button>
    </div>
  );
};

export default VerificationResult;

