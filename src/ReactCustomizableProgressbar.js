import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ReactCustomizableProgressbar = ({
    radius,
    progress,
    steps,
    cut,
    rotate,
    strokeWidth,
    strokeColor,
    fillColor,
    strokeLinecap,
    transition,
    pointerRadius,
    pointerStrokeWidth,
    pointerStrokeColor,
    pointerFillColor,
    trackStrokeColor,
    trackStrokeWidth,
    trackStrokeLinecap,
    trackTransition,
    counterClockwise,
    inverse,
    initialAnimation,
    initialAnimationDelay,
    className,
    children
}) => {

    const [ animationInited, setAnimationInited ] = useState(false)

    useEffect(() => {
        if(initialAnimation) {
            setTimeout(() => setAnimationInited(true), initialAnimationDelay)
        }
    }, [])

    const getProgress = () => initialAnimation && !animationInited ? 0 : progress

    const getStrokeDashoffset = (strokeLength) => {
        const progress = getProgress()
        const progressLength = (strokeLength / steps) * (steps - progress)

        if(inverse) {
            return counterClockwise ? 0 : progressLength - strokeLength
        }

        return counterClockwise ? -1 * progressLength : progressLength
    }

    const getStrokeDashArray = (strokeLength, circumference) => {
        const progress = getProgress()
        const progressLength = (strokeLength / steps) * (steps - progress)

        if(inverse) {
            return `${progressLength}, ${circumference}`
        }

        return counterClockwise
            ? `${strokeLength * (progress / 100)}, ${circumference}`
            : `${strokeLength}, ${circumference}`
    }

    const getTrackStrokeDashArray = (strokeLength, circumference) => {
        if(initialAnimation && !animationInited) {
            return `0, ${circumference}`
        }

        return `${strokeLength}, ${circumference}`
    }

    const getExtendedWidth = () => {
        const pointerWidth = pointerRadius + pointerStrokeWidth

        if(pointerWidth > strokeWidth && pointerWidth > trackStrokeWidth) {
            return pointerWidth * 2
        } else if(strokeWidth > trackStrokeWidth) {
            return strokeWidth * 2
        }

        return trackStrokeWidth * 2
    }

    const getPointerAngle = () => {
        const progress = getProgress()

        return counterClockwise
            ? ((360 - cut) / steps) * (steps - progress)
            : ((360 - cut) / steps) * progress
    }

    const d = 2 * radius
    const width = d + getExtendedWidth()

    const circumference = 2 * Math.PI * radius
    const strokeLength = (circumference / 360) * (360 - cut)

    return (
        <div
            className={className ? `RCP ${className}` : 'RCP'}
            style={{
                position: 'relative',
                width: `${width}px`
            }}
        >
            <svg
                width={width}
                height={width}
                viewBox={`0 0 ${width} ${width}`}
                style={{transform: `rotate(${rotate}deg)`}}
            >
                {trackStrokeWidth > 0 && (
                    <circle
                        cx={width / 2}
                        cy={width / 2}
                        r={radius}
                        fill="none"
                        stroke={trackStrokeColor}
                        strokeWidth={trackStrokeWidth}
                        strokeDasharray={getTrackStrokeDashArray(
                            strokeLength,
                            circumference
                        )}
                        strokeLinecap={trackStrokeLinecap}
                        className="RCP__track"
                        style={{ transition: trackTransition }}
                    />
                )}
                {strokeWidth > 0 && (
                    <circle
                        cx={width / 2}
                        cy={width / 2}
                        r={radius}
                        fill={fillColor}
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        strokeDasharray={getStrokeDashArray(
                            strokeLength,
                            circumference
                        )}
                        strokeDashoffset={getStrokeDashoffset(
                            strokeLength
                        )}
                        strokeLinecap={strokeLinecap}
                        className="RCP__progress"
                        style={{ transition }}
                    />
                )}
                {pointerRadius > 0 && (
                    <circle
                        cx={d}
                        cy="50%"
                        r={pointerRadius}
                        fill={pointerFillColor}
                        stroke={pointerStrokeColor}
                        strokeWidth={pointerStrokeWidth}
                        className="RCP__pointer"
                        style={{
                            transformOrigin: '50% 50%',
                            transform: `rotate(${getPointerAngle()}deg) translate(${getExtendedWidth() /
                            2}px)`,
                            transition
                        }}
                    />
                )}
            </svg>

            {children || null}
        </div>
    )

}

ReactCustomizableProgressbar.propTypes = {
    radius: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    steps: PropTypes.number,
    cut: PropTypes.number,
    rotate: PropTypes.number,

    strokeWidth: PropTypes.number,
    strokeColor: PropTypes.string,
    fillColor: PropTypes.string.isRequired,
    strokeLinecap: PropTypes.string,
    transition: PropTypes.string,

    pointerRadius: PropTypes.number,
    pointerStrokeWidth: PropTypes.number,
    pointerStrokeColor: PropTypes.string,
    pointerFillColor: PropTypes.string,

    trackStrokeWidth: PropTypes.number,
    trackStrokeColor: PropTypes.string,
    trackStrokeLinecap: PropTypes.string,
    trackTransition: PropTypes.string,

    initialAnimation: PropTypes.bool,
    initialAnimationDelay: PropTypes.number,

    inverse: PropTypes.bool,
    counterClockwise: PropTypes.bool,

    children: PropTypes.element,
    className: PropTypes.string
}

ReactCustomizableProgressbar.defaultProps = {
    radius: 100,
    progress: 0,
    steps: 100,
    cut: 0,
    rotate: -90,

    strokeWidth: 20,
    strokeColor: 'indianred',
    fillColor: 'none',
    strokeLinecap: 'round',
    transition: '.3s ease',

    pointerRadius: 0,
    pointerStrokeWidth: 20,
    pointerStrokeColor: 'indianred',
    pointerFillColor: 'white',

    trackStrokeColor: '#e6e6e6',
    trackStrokeWidth: 20,
    trackStrokeLinecap: 'round',
    trackTransition: '.3s ease',

    counterClockwise: false,
    inverse: false,

    initialAnimation: false,
    initialAnimationDelay: 0,
    className: null
}

export default ReactCustomizableProgressbar
