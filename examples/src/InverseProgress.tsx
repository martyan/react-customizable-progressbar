import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { ExampleProps } from './Examples';
import ExampleCard from './ExampleCard';

const InverseProgress = ({ progress }: ExampleProps) => (
  <ExampleCard
    title="Inverse progress"
    href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/src/InverseProgress.tsx"
  >
    <ProgressBar
      radius={100}
      progress={progress}
      fillColor="#f2f2f2"
      strokeWidth={2}
      strokeColor="#656d78"
      trackStrokeWidth={2}
      pointerRadius={12}
      pointerStrokeWidth={2}
      pointerStrokeColor="#656d78"
      inverse
    >
      <div className="flex items-center justify-center text-center absolute top-0 w-full h-full m-auto text-[2.2em] font-thin text-[#555] select-none">
        <div>{progress}%</div>
      </div>
    </ProgressBar>
  </ExampleCard>
);

export default InverseProgress;
