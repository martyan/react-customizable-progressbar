import React, { Component } from 'react'
import Basic from './Basic'
import CounterClockwise from './CounterClockwise'
import Cut from './Cut'
import WithPointer from './WithPointer'
import InverseProgress from './InverseProgress'
import CustomIndicator from './CustomIndicator'
import Countdown from './Countdown'
import './Examples.scss'

class Examples extends Component {

    state = {
        progress: 64
    }

    render = () => {
        const { progress } = this.state

        return (
            <div className="examples">
                <div className="slider">
                    <div className="desc">Progress</div>
                    <input
                        type="range"
                        value={progress}
                        onChange={e =>
                            this.setState({
                                progress: parseInt(e.target.value, 10)
                            })
                        }
                        min={0}
                        max={100}
                    />
                </div>

                <div className="list">
                    <Basic progress={progress} />
                    <CounterClockwise progress={progress} />
                    <Cut progress={progress} />
                    <WithPointer progress={progress} />
                    <InverseProgress progress={progress} />
                    <CustomIndicator progress={progress} />
                    <Countdown progress={progress} />
                </div>
            </div>
        )
    }

}

export default Examples
