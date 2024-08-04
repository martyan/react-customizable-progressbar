import React, { useState } from 'react';
import Basic from './Basic';
import CounterClockwise from './CounterClockwise';
import Cut from './Cut';
import WithPointer from './WithPointer';
import InverseProgress from './InverseProgress';
import CustomIndicator from './CustomIndicator';
import Countdown from './Countdown';
import './Examples.scss';

export interface ExampleProps {
  progress: number;
}

const Examples = () => {
  const [progress, setProgress] = useState(64);

  return (
    <div className="examples">
      <div className="slider">
        <div className="desc">Progress</div>
        <input
          type="range"
          value={progress}
          onChange={(e) => setProgress(parseInt(e.target.value, 10))}
          min={0}
          max={100}
        />
      </div>

      <div className="list">
        <Basic progress={progress} />
        <CounterClockwise progress={progress} />
        <Cut progress={progress} />
        <WithPointer progress={progress} />
        <InverseProgress progress={progress} />
        <CustomIndicator progress={progress} />
        <Countdown />
      </div>
    </div>
  );
};

export default Examples;
