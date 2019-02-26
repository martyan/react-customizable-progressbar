import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ReactCustomizableProgressbar extends Component {
    state = {
        animationInited: false,
    }

    componentDidMount = () => {
        const { initialAnimation, initialAnimationDelay } = this.props
        if (initialAnimation)
            setTimeout(this.initAnimation, initialAnimationDelay)
    }

    initAnimation = () => {
        this.setState({ animationInited: true })
    }

    getProgress = () => {
        const { initialAnimation, progress } = this.props
        const { animationInited } = this.state

        return initialAnimation && !animationInited ? 0 : progress
    }

    getStrokeDashoffset = strokeLength => {
        const { counterClockwise, inverse, steps } = this.props

        const progress = this.getProgress()
        const progressLength = (strokeLength / steps) * (steps - progress)

        if (inverse) return counterClockwise ? 0 : progressLength - strokeLength

        return counterClockwise ? -1 * progressLength : progressLength
    }

    getStrokeDashArray = (strokeLength, circumference) => {
        const { counterClockwise, inverse, steps } = this.props

        const progress = this.getProgress()
        const progressLength = (strokeLength / steps) * (steps - progress)

        if (inverse) return `${progressLength}, ${circumference}`

        return counterClockwise
            ? `${strokeLength * (progress / 100)}, ${circumference}`
            : `${strokeLength}, ${circumference}`
    }

    getTrackStrokeDashArray = (strokeLength, circumference) => {
        const { initialAnimation } = this.props
        const { animationInited } = this.state

        if (initialAnimation && !animationInited) return `0, ${circumference}`
        return `${strokeLength}, ${circumference}`
    }

    getExtendedWidth = () => {
        const {
            strokeWidth,
            pointerRadius,
            pointerStrokeWidth,
            trackStrokeWidth,
        } = this.props
        const pointerWidth = pointerRadius + pointerStrokeWidth

        if (pointerWidth > strokeWidth && pointerWidth > trackStrokeWidth)
            return pointerWidth * 2
        else if (strokeWidth > trackStrokeWidth) return strokeWidth * 2
        else return trackStrokeWidth * 2
    }

    getPointerAngle = () => {
        const { cut, counterClockwise, steps } = this.props
        const progress = this.getProgress()

        return counterClockwise
            ? ((360 - cut) / steps) * (steps - progress)
            : ((360 - cut) / steps) * progress
    }

    render = () => {
        const {
            radius,
            pointerRadius,
            pointerStrokeWidth,
            pointerFillColor,
            pointerStrokeColor,
            fillColor,
            trackStrokeWidth,
            trackStrokeColor,
            trackStrokeLinecap,
            strokeColor,
            strokeWidth,
            strokeLinecap,
            rotate,
            cut,
            children,
            trackTransition,
            transition,
            className,
        } = this.props

        const d = 2 * radius
        const width = d + this.getExtendedWidth()

        const circumference = 2 * Math.PI * radius
        const strokeLength = (circumference / 360) * (360 - cut)

        return (
            <div
                className={
                    className
                        ? `progress-ReactCustomizableProgressbar ${className}`
                        : 'progress-ReactCustomizableProgressbar'
                }
                style={{
                    position: 'relative',
                    width: `${width}px`,
                }}
            >
                <svg
                    width={width}
                    height={width}
                    viewBox={`0 0 ${width} ${width}`}
                    style={{ transform: `rotate(${rotate}deg)` }}
                >
                    {trackStrokeWidth > 0 && (
                        <circle
                            cx={width / 2}
                            cy={width / 2}
                            r={radius}
                            fill="none"
                            stroke={trackStrokeColor}
                            strokeWidth={trackStrokeWidth}
                            strokeDasharray={this.getTrackStrokeDashArray(
                                strokeLength,
                                circumference
                            )}
                            strokeLinecap={trackStrokeLinecap}
                            className="progress-ReactCustomizableProgressbar-track"
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
                            strokeDasharray={this.getStrokeDashArray(
                                strokeLength,
                                circumference
                            )}
                            strokeDashoffset={this.getStrokeDashoffset(
                                strokeLength
                            )}
                            strokeLinecap={strokeLinecap}
                            className="progress-ReactCustomizableProgressbar-progress"
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
                            className="progress-ReactCustomizableProgressbar-progress-pointer"
                            style={{
                                transformOrigin: '50% 50%',
                                transform: `rotate(${this.getPointerAngle()}deg) translate(${this.getExtendedWidth() /
                                    2}px)`,
                                transition,
                            }}
                        />
                    )}
                </svg>
                {children || null}
            </div>
        )
    }
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
    className: PropTypes.string,
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
    className: null,
}

export default ReactCustomizableProgressbar
