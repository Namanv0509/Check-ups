import React from 'react';
import './CheckUps.css'; // Import your CSS file for styling

const CheckUps: React.FC = () => {
  return (
    <div className="check-ups-container" style={{ width: '220px' }}>
        
      <div className="doctor-info">
        <h2 className="Check-Ups">Check Ups</h2>
        <h2 className='Dr'>Oncologist,Dr Nareen Bhaat</h2>
        <h3 className='Xray'>Immediate X ray</h3><div/>
        <div className="x-ray-list">
          <div className="x-ray-row">
            <div className="x-ray-cell">anefhcbu</div>
            <div className="x-ray-cell">15mg</div>
            <div className="x-ray-cell">1x1x1</div>
          </div>
          <div className="x-ray-row">
            <div className="x-ray-cell">anefhcbu</div>
            <div className="x-ray-cell">15mg</div>
            <div className="x-ray-cell">1x1x1</div>
          </div>
          <div className="x-ray-row">
            <div className="x-ray-cell">anefhcbu</div>
            <div className="x-ray-cell">15mg</div>
            <div className="x-ray-cell">1x1x1</div>
          </div>
        </div>
      </div>
      
      

      <div className="doctor-info"><hr/>    
        <h2 className='Dr'>Oncologist,Dr Nareen Bhaat</h2>
        <h3 className='Xray'>Immediate X ray</h3>
        <div className="x-ray-list2">
          <div className="x-ray-row2">
            <div className="x-ray-cell2">anefhcbu</div>
            <div className="x-ray-cell2">15mg</div>
            <div className="x-ray-cell2">1x1x1</div>
          </div>
          <div className="x-ray-row2">
             <div className="x-ray-cell2">anefhcbu</div>
            <div className="x-ray-cell2">15mg</div>
            <div className="x-ray-cell2">1x1x1</div> 
          </div>
          <div className="x-ray-row2">
            <div className="x-ray-cell2">anefhcbu</div>
            <div className="x-ray-cell2">15mg</div>
            <div className="x-ray-cell2">1x1x1</div> 
          </div>
        </div>
      </div>

      <div className="number-buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
      </div>
    </div>
  );
};

export default CheckUps;
