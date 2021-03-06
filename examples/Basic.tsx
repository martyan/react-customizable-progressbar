import React, { FunctionComponent } from 'react'
//@ts-ignore
import ProgressBar from 'react-customizable-progressbar'
import { ExampleProps } from './Examples'

const Basic: FunctionComponent<ExampleProps> = ({ progress }) => (
    <div className="item">
        <div className="title">
            <span>Basic</span>
            <a
                href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/Basic.tsx"
                target="_blank"
            >
                code <i className="fa fa-external-link-square" />
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
