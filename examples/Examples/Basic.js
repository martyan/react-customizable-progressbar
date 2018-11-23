import React from 'react'
import ProgressBar from '../../src/ReactCustomizableProgressbar'

const Basic = ({ progress }) => (
  <div className="item">
    <div className="title">
      <span>Basic</span>
      <a href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/Examples/Basic.js" target="_blank">
        code <i className="fa fa-external-link-square"></i>
      </a>
    </div>

    <ProgressBar 
      radius={100}
      progress={progress}
      strokeWidth={18}
      strokeColor="#5d9cec"
      strokeLinecap="square"
      trackStrokeWidth={18}
    >
      <div className="indicator">
        <div>{progress}%</div>
      </div>
    </ProgressBar>
  </div>
)

export default Basic
