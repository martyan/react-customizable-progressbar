import React from 'react'
import ProgressBar from 'react-customizable-progressbar'

const InverseProgress = ({ progress }) => (
    <div className="item">
        <div className="title">
            <span>Inverse progress</span>
            <a
                href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/InverseProgress.js"
                target="_blank"
            >
                code <i className="fa fa-external-link-square" />
            </a>
        </div>

        <ProgressBar
            radius={100}
            progress={progress}
            fillColor="#f2f2f2"
            strokeWidth={2}
            strokeColor="#656d78"
            trackStrokeWidth={2}
            pointerRadius={12}
            pointerStrokeWidth={2}
            pointerStrokeColor="#656d78"
            inverse
        >
            <div className="indicator">
                <div>{progress}%</div>
            </div>
        </ProgressBar>
    </div>
)

export default InverseProgress
