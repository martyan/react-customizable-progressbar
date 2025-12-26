import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { ExampleProps } from './Examples';
import ExampleCard from './ExampleCard';

const Basic = ({ progress }: ExampleProps) => (
  <ExampleCard
    title="Basic"
    href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/Basic.tsx"
  >
    <ProgressBar
      radius={100}
      progress={progress}
      strokeWidth={18}
      strokeColor="#5d9cec"
      strokeLinecap="square"
      trackStrokeWidth={18}
    >
      <div className="flex items-center justify-center text-center absolute top-0 w-full h-full m-auto text-[2.2em] font-thin text-[#555] select-none">
        <div>{progress}%</div>
      </div>
    </ProgressBar>
  </ExampleCard>
);

export default Basic;
