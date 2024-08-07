import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ProgressBar from 'react-customizable-progressbar';
import { ExampleProps } from './Examples';

const WithPointer = ({ progress }: ExampleProps) => (
  <div className="item">
    <div className="title">
      <span>With pointer</span>
      <a
        href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/WithPointer.tsx"
        target="_blank"
      >
        code <i className="fa fa-external-link-square" />
      </a>
    </div>

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
      <div className="indicator">
        <div>{progress}%</div>
      </div>
    </ProgressBar>
  </div>
);

export default WithPointer;
