import React from 'react'
import PropTypes from 'prop-types'
import LinecapSelector from './LinecapSelector'
import ColorSelector from './ColorSelector'
import './Controls.scss'

export const mainGroup = [
    {
        name: 'radius',
        label: 'Radius',
        type: 'number',
        min: 0,
        unit: 'px'
    },
    {
        name: 'progress',
        label: 'Progress',
        type: 'number',
        min: 0,
        max: 'steps'
    },
    {
        name: 'steps',
        label: 'Steps',
        type: 'number',
        min: 'progress'
    },
    {
        name: 'cut',
        label: 'Cut',
        type: 'number',
        min: 0,
        max: 360,
        unit: 'deg'
    },
    {
        name: 'rotate',
        label: 'Rotate',
        type: 'number',
        unit: 'deg'
    },
    {
        name: 'fillColor',
        label: 'Fill color',
        type: 'color'
    },
    {
        name: 'counterClockwise',
        label: 'Counter-clockwise',
        type: 'checkbox'
    },
    {
        name: 'inverse',
        label: 'Inverse',
        type: 'checkbox'
    },
    {
        name: 'initialAnimation',
        label: 'Initial animation',
        type: 'checkbox'
    },
    {
        name: 'initialAnimationDelay',
        label: 'Initial animation delay',
        type: 'number',
        min: 0,
        unit: 'ms'
    }
]

export const progressGroup = [
    {
        name: 'strokeWidth',
        label: 'Stroke width',
        type: 'number',
        min: 0,
        unit: 'px'
    },
    {
        name: 'strokeColor',
        label: 'Stroke color',
        type: 'color',
        condition: props => props.strokeWidth > 0
    },
    {
        name: 'transition',
        label: 'Stroke transition',
        type: 'text',
        condition: props => props.strokeWidth > 0
    },
    {
        name: 'strokeLinecap',
        label: 'Stroke linecap',
        type: 'linecap',
        condition: props => props.strokeWidth > 0
    }
]

export const trackGroup = [
    {
        name: 'trackStrokeWidth',
        label: 'Stroke width',
        type: 'number',
        min: 0,
        unit: 'px'
    },
    {
        name: 'trackStrokeColor',
        label: 'Stroke color',
        type: 'color',
        condition: props => props.trackStrokeWidth > 0
    },
    {
        name: 'trackTransition',
        label: 'Stroke transition',
        type: 'text',
        condition: props => props.trackStrokeWidth > 0
    },
    {
        name: 'trackStrokeLinecap',
        label: 'Stroke linecap',
        type: 'linecap',
        condition: props => props.trackStrokeWidth > 0 && props.cut > 0
    }
]

export const pointerGroup = [
    {
        name: 'pointerRadius',
        label: 'Radius',
        type: 'number',
        min: 0,
        unit: 'px'
    },
    {
        name: 'pointerStrokeWidth',
        label: 'Stroke width',
        type: 'number',
        min: 0,
        unit: 'px',
        condition: props => props.pointerRadius > 0
    },
    {
        name: 'pointerStrokeColor',
        label: 'Stroke color',
        type: 'color',
        condition: props =>
            props.pointerRadius > 0 && props.pointerStrokeWidth > 0
    },
    {
        name: 'pointerFillColor',
        label: 'Fill color',
        type: 'color',
        condition: props =>
            props.pointerRadius > 0 && props.pointerStrokeWidth > 0
    }
]

const groups = {
    main: mainGroup,
    progress: progressGroup,
    track: trackGroup,
    pointer: pointerGroup
}

const getChangeFn = (input, props) => {
    switch (input.type) {
        case 'color':
        case 'linecap':
            return value => props.handleChange(input.name, value)
        case 'text':
            return e => props.handleChange(input.name, e.target.value)
        case 'number':
            return e => props.handleNumberChange(input.name, e)
        case 'checkbox':
            return e => props.handleCheckboxChange(input.name, e)
    }
}

const getMinMaxValue = (value, props) => {
    if (typeof value === 'string') return props[value]
    return value
}

const getControlInput = (control, props) => {
    switch (control.type) {
        case 'number':
            return (
                <input
                    type={control.type}
                    value={props[control.name]}
                    onChange={getChangeFn(control, props)}
                    min={
                        control.hasOwnProperty('min')
                            ? getMinMaxValue(control.min, props)
                            : null
                    }
                    max={
                        control.hasOwnProperty('max')
                            ? getMinMaxValue(control.max, props)
                            : null
                    }
                />
            )

        case 'color':
            return (
                <ColorSelector
                    value={props[control.name]}
                    onChange={getChangeFn(control, props)}
                />
            )

        case 'checkbox':
            return (
                <input
                    type={control.type}
                    checked={props[control.name]}
                    onChange={getChangeFn(control, props)}
                />
            )

        case 'text':
            return (
                <input
                    type={control.type}
                    value={props[control.name]}
                    onChange={getChangeFn(control, props)}
                />
            )

        case 'linecap':
            return (
                <LinecapSelector
                    value={props[control.name]}
                    onChange={getChangeFn(control, props)}
                />
            )
    }
}

const getControl = (control, props) => {
    if (control.hasOwnProperty('condition') && !control.condition(props))
        return null

    const isModified = props.defaultState[control.name] !== props[control.name]

    return (
        <label key={control.name}>
            <span className={isModified ? 'caption modified' : 'caption'}>
                {control.label}
            </span>
            {getControlInput(control, props)}
            {control.hasOwnProperty('unit') && (
                <span className="unit">{control.unit}</span>
            )}
        </label>
    )
}

const renderTitle = props => {
    if (props.type === 'main') return null
    if (props.type === 'progress')
        return <div className="title">Progress style</div>
    if (props.type === 'track') return <div className="title">Track style</div>
    if (props.type === 'pointer')
        return <div className="title">Pointer style</div>
}

const Controls = props => {
    return (
        <div className="controls">
            {renderTitle(props)}
            {groups[props.type].map(control => getControl(control, props))}
        </div>
    )
}

Controls.propTypes = {
    radius: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    cut: PropTypes.number.isRequired,
    rotate: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    strokeColor: PropTypes.string.isRequired,
    fillColor: PropTypes.string.isRequired,
    strokeLinecap: PropTypes.string.isRequired,
    transition: PropTypes.string.isRequired,
    pointerRadius: PropTypes.number.isRequired,
    pointerStrokeWidth: PropTypes.number.isRequired,
    pointerStrokeColor: PropTypes.string.isRequired,
    pointerFillColor: PropTypes.string.isRequired,
    trackStrokeWidth: PropTypes.number.isRequired,
    trackStrokeColor: PropTypes.string.isRequired,
    trackStrokeLinecap: PropTypes.string.isRequired,
    trackTransition: PropTypes.string.isRequired,
    initialAnimation: PropTypes.bool.isRequired,
    initialAnimationDelay: PropTypes.number.isRequired,
    inverse: PropTypes.bool.isRequired,
    counterClockwise: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleNumberChange: PropTypes.func.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    defaultState: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
}

export default Controls
