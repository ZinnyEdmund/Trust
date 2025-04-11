// components/QuickCheck.js
import React, { useState } from 'react';

interface QuickCheckProps {
  onSubmit: (claim: string) => void;
}

const QuickCheck: React.FC<QuickCheckProps> = ({ onSubmit }) => {
  const [claim, setClaim] = useState('');
  const [offlineMode, setOfflineMode] = useState(false);
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (claim.trim()) {
      onSubmit(claim);
    }
  };
  
  return (
    <div className="quick-check">
      <h2>Quick Check</h2>
      <p>Enter a claim, news headline, or paste a link to verify</p>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={claim}
          onChange={(e) => setClaim(e.target.value)}
          placeholder="Example: 'COVID vaccines cause infertility' or 'Election postponed to May'"
          rows={4}
        />
        
        <div className="offline-toggle">
          <label>
            <input
              type="checkbox"
              checked={offlineMode}
              onChange={() => setOfflineMode(!offlineMode)}
            />
            <span>Offline Mode</span>
            <small>(Uses local data only)</small>
          </label>
        </div>
        
        <button type="submit" className="check-btn">
          Verify Now
        </button>
      </form>
    </div>
  );
};

export default QuickCheck;