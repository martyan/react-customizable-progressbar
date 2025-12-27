import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { ExampleProps } from './Examples';
import ExampleCard from './ExampleCard';

const CounterClockwise = ({ progress }: ExampleProps) => (
  <ExampleCard
    title="Counter-clockwise"
    href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/src/CounterClockwise.tsx"
  >
    <ProgressBar
      radius={100}
      progress={progress}
      strokeWidth={18}
      strokeColor="#a0d468"
      strokeLinecap="round"
      trackStrokeWidth={18}
      counterClockwise
    >
      <div className="flex items-center justify-center text-center absolute top-0 w-full h-full m-auto text-[2.2em] font-thin text-[#555] select-none">
        <div>{progress}%</div>
      </div>
    </ProgressBar>
  </ExampleCard>
);

export default CounterClockwise;
