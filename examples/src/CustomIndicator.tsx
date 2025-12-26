import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { ExampleProps } from './Examples';
import { VolumeIcon } from './icons';
import ExampleCard from './ExampleCard';

const CustomIndicator = ({ progress }: ExampleProps) => (
  <ExampleCard
    title="Custom indicator"
    href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/CustomIndicator.tsx"
  >
    <ProgressBar
      radius={100}
      progress={progress}
      cut={120}
      rotate={-210}
      strokeWidth={16}
      strokeColor="#5d9cec"
      strokeLinecap="square"
      trackStrokeWidth={8}
      trackStrokeColor="#e6e6e6"
      trackStrokeLinecap="square"
      pointerRadius={0}
      initialAnimation={true}
      transition="1.5s ease 0.5s"
      trackTransition="0s ease"
    >
      <div className="flex items-end justify-center text-center absolute top-0 w-full h-full m-auto text-[1.3em]">
        <div className="mb-[30px]">
          <div className="text-[3em] text-[#5d9cec] mb-[15px]">
            <VolumeIcon />
          </div>
          <div className="text-[1.6em] text-[#bbb] font-thin">{progress}%</div>
        </div>
      </div>
    </ProgressBar>
  </ExampleCard>
);

export default CustomIndicator;
