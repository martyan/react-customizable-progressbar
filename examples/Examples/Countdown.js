import React, { Component } from 'react'
import moment from 'moment'
import ProgressBar from '../../src/ReactCustomizableProgressbar'
import Timer from './Timer'
import './Countdown.scss'

const totalSeconds = 60
const initialSeconds = 15
const initialProgress = (initialSeconds / totalSeconds) * 100

const getText = date => {
    const h = date.hour()
    const m = date.minute()

    if (h) return date.format('h[h] m[m] s[s]')
    else if (m) return date.format('m[m] s[s]')
    else return date.format('s[s]')
}

const Indicator = props => {
    const seconds = totalSeconds - props.elapsedSeconds - initialSeconds
    const date = moment()
        .startOf('day')
        .seconds(seconds)

    return (
        <div className="indicator-countdown">
            <div>
                <div className={seconds > 0 ? 'caption' : 'caption big'}>
                    Popcorn ready <span>in</span>
                </div>
                <div className={seconds > 0 ? 'time' : 'time hidden'}>
                    {getText(date)}
                </div>
            </div>
        </div>
    )
}

class Countdown extends Component {
    state = {
        elapsedSeconds: 0,
        progress: initialProgress,
    }

    handleTimer = elapsedSeconds => {
        const progress = this.roundProgress(
            ((elapsedSeconds + initialSeconds) / totalSeconds) * 100
        )
        this.setState({
            progress,
            elapsedSeconds,
        })
    }

    roundProgress = progress => {
        const factor = Math.pow(10, 2)
        return Math.round(progress * factor) / factor
    }

    render = () => {
        const { progress, elapsedSeconds } = this.state

        return (
            <div className="item">
                <div className="title">
                    <span>Countdown</span>
                    <a
                        href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/Examples/Countdown.js"
                        target="_blank"
                    >
                        code <i className="fa fa-external-link-square" />
                    </a>
                </div>

                <div className="countdown">
                    <ProgressBar
                        radius={100}
                        progress={progress}
                        strokeWidth={3}
                        strokeColor="indianred"
                        trackStrokeWidth={3}
                        trackStrokeColor="#e6e6e6"
                        pointerRadius={5}
                        pointerFill="white"
                        pointerStrokeWidth={2}
                        pointerStrokeColor="indianred"
                    >
                        <Indicator
                            progress={progress}
                            elapsedSeconds={elapsedSeconds}
                        />
                    </ProgressBar>

                    <Timer
                        initialSeconds={initialSeconds}
                        totalSeconds={totalSeconds}
                        onChange={this.handleTimer}
                        interval={1000}
                    />
                </div>
            </div>
        )
    }
}

export default Countdown
