import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { ExampleProps } from './Examples';

const Cut = ({ progress }: ExampleProps) => (
  <div className="basis-[236px] shrink-0 grow-0 py-[5px] px-[15px] bg-white rounded-[5px] m-[30px]">
    <div className="flex justify-between items-center py-[15px] px-[5px] mb-5 font-normal uppercase text-[#666] border-b border-[#f5f5f5] text-[0.9em]">
      <span className="flex-1 mr-[10px]">Cut</span>
      <a
        href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/Cut.tsx"
        target="_blank"
        className="no-underline text-[#ccc] text-[0.9em]"
      >
        code <i className="fa fa-external-link-square" />
      </a>
    </div>

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
  </div>
);

export default Cut;
