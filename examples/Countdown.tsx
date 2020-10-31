import React, { FunctionComponent, useState } from 'react'
//@ts-ignore
import ProgressBar from 'react-customizable-progressbar'
import moment, { Moment } from 'moment'
import Timer from './Timer'
import './Countdown.scss'

const totalSeconds = 60
const initialSeconds = 15
const initialProgress = (initialSeconds / totalSeconds) * 100

const getText = (date: Moment) => {
    const h = date.hour()
    const m = date.minute()

    if(h) return date.format('h[h] m[m] s[s]')
    else if(m) return date.format('m[m] s[s]')
    else return date.format('s[s]')
}

interface IndicatorProps {
    progress: number,
    elapsedSeconds: number
}

const Indicator: FunctionComponent<IndicatorProps> = (props) => {
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

const Countdown: FunctionComponent = () => {

    const [ elapsedSeconds, setElapsedSeconds ] = useState(0)
    const [ progress, setProgress ] = useState(initialProgress)

    const roundProgress = (progress: number) => {
        const factor = Math.pow(10, 2)
        return Math.round(progress * factor) / factor
    }

    const handleTimer = (elapsedSeconds: number) => {
        const progress = roundProgress(
            ((elapsedSeconds + initialSeconds) / totalSeconds) * 100
        )

        setProgress(progress)
        setElapsedSeconds(elapsedSeconds)
    }

    return (
        <div className="item">
            <div className="title">
                <span>Countdown</span>
                <a
                    href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/Countdown.tsx"
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
                    onChange={handleTimer}
                    interval={1000}
                />
            </div>
        </div>
    )

}

export default Countdown
