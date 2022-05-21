import React from 'react';
import './scss/Progress.scss';

const Progress = () => (
  <div className="progress-container d_flex_r g10">
    <div className="circle-wrap">
      <div className="circle">
        <div className="mask full">
          <div className="fill" />
        </div>
        <div className="mask half">
          <div className="fill" />
        </div>
        <div className="inside-circle"> 75% </div>
      </div>
    </div>
    <div className="percentage_container">
      <h3>75%</h3>
      <p>Completed</p>
    </div>
  </div>
);

export default Progress;
