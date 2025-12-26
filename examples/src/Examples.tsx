import React, { useState } from 'react';
import Basic from './Basic';
import CounterClockwise from './CounterClockwise';
import Cut from './Cut';
import WithPointer from './WithPointer';
import InverseProgress from './InverseProgress';
import CustomIndicator from './CustomIndicator';
import Countdown from './Countdown';

export interface ExampleProps {
  progress: number;
}

const Examples = () => {
  const [progress, setProgress] = useState(64);

  return (
    <div className="font-['Roboto',sans-serif]">
      <div className="max-w-[280px] hidden sm:flex my-[30px] mx-auto justify-between items-center">
        <div className="inline-block text-[1.05em] text-[#777] font-light">Progress</div>
        <input
          type="range"
          value={progress}
          onChange={(e) => setProgress(parseInt(e.target.value, 10))}
          min={0}
          max={100}
          className="inline-block"
        />
      </div>

      <div className="flex flex-wrap justify-center">
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
