import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { ExampleProps } from './Examples';
import ExampleCard from './ExampleCard';

const WithPointer = ({ progress }: ExampleProps) => (
  <ExampleCard
    title="With pointer"
    href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/src/WithPointer.tsx"
  >
    <ProgressBar
      radius={100}
      progress={progress}
      strokeWidth={4}
      strokeColor="indianred"
      trackStrokeWidth={4}
      pointerRadius={8}
      pointerStrokeWidth={5}
      pointerStrokeColor="indianred"
    >
      <div className="flex items-center justify-center text-center absolute top-0 w-full h-full m-auto text-[2.2em] font-thin text-[#555] select-none">
        <div>{progress}%</div>
      </div>
    </ProgressBar>
  </ExampleCard>
);

export default WithPointer;
