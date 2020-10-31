import React, { FunctionComponent, useState, useEffect } from 'react'

interface TimerProps {
    initialSeconds: number,
    totalSeconds: number,
    onChange?: (value: number) => void,
    interval: number
}

const Timer: FunctionComponent<TimerProps> = ({ initialSeconds, totalSeconds, onChange, interval }) => {

    const [ elapsed, setElapsed ] = useState(0)
    const [ intervalId, setIntervalId ] = useState<number | undefined>()

    useEffect(() => {
        start(intervalId)

        return () => clear(intervalId)
    }, [])

    useEffect(() => {
        onChange?.(elapsed)
    }, [elapsed])

    const start = (intervalId: number | undefined) => {
        clear(intervalId)

        const newIntervalId = window.setInterval(() => {
            if(elapsed + initialSeconds === totalSeconds) return

            setElapsed(elapsed => elapsed + 1)
            setIntervalId(newIntervalId)
        }, interval)
    }

    const clear = (intervalId: number | undefined) => {
        if(intervalId !== undefined) {
            window.clearInterval(intervalId)
        }
    }

    return null

}

export default Timer
