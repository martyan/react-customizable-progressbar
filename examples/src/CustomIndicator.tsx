import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { ExampleProps } from './Examples';

const CustomIndicator = ({ progress }: ExampleProps) => (
  <div className="basis-[236px] shrink-0 grow-0 py-[5px] px-[15px] bg-white rounded-[5px] m-[30px]">
    <div className="flex justify-between items-center py-[15px] px-[5px] mb-5 font-normal uppercase text-[#666] border-b border-[#f5f5f5] text-[0.9em]">
      <span className="flex-1 mr-[10px]">Custom indicator</span>
      <a
        href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/CustomIndicator.tsx"
        target="_blank"
        className="no-underline text-[#ccc] text-[0.9em]"
      >
        code <i className="fa fa-external-link-square" />
      </a>
    </div>

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
            <i className="fa fa-volume-up" />
          </div>
          <div className="text-[1.6em] text-[#bbb] font-thin">{progress}%</div>
        </div>
      </div>
    </ProgressBar>
  </div>
);

export default CustomIndicator;
