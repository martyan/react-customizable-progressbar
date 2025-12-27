import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { ExampleProps } from './Examples';
import ExampleCard from './ExampleCard';

const Cut = ({ progress }: ExampleProps) => (
  <ExampleCard
    title="Cut"
    href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/src/Cut.tsx"
  >
    <ProgressBar
      radius={100}
      progress={progress}
      strokeWidth={28}
      strokeColor="#ffce54"
      strokeLinecap="butt"
      trackStrokeWidth={14}
      trackStrokeLinecap="butt"
      cut={120}
      rotate={-210}
    >
      <div className="flex items-center justify-center text-center absolute top-0 w-full h-full m-auto text-[2.2em] font-thin text-[#555] select-none">
        <div>{progress}%</div>
      </div>
    </ProgressBar>
  </ExampleCard>
);

export default Cut;
