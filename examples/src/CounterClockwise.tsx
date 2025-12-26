import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { ExampleProps } from './Examples';

const CounterClockwise = ({ progress }: ExampleProps) => (
  <div className="item">
    <div className="title">
      <span>Counter-clockwise</span>
      <a
        href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/CounterClockwise.tsx"
        target="_blank"
      >
        code <i className="fa fa-external-link-square" />
      </a>
    </div>

    <ProgressBar
      radius={100}
      progress={progress}
      strokeWidth={18}
      strokeColor="#a0d468"
      strokeLinecap="round"
      trackStrokeWidth={18}
      counterClockwise
    >
      <div className="indicator">
        <div>{progress}%</div>
      </div>
    </ProgressBar>
  </div>
);

export default CounterClockwise;
