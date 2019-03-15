import React from 'react'
import ProgressBar from 'react-customizable-progressbar'

const CustomIndicator = ({ progress }) => (
    <div className="item">
        <div className="title">
            <span>Custom indicator</span>
            <a
                href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/CustomIndicator.js"
                target="_blank"
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
            <div className="indicator-volume">
                <div className="inner">
                    <div className="icon">
                        <i className="fa fa-volume-up" />
                    </div>
                    <div className="percentage">{progress}%</div>
                </div>
            </div>
        </ProgressBar>
    </div>
)

export default CustomIndicator
