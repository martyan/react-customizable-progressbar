import React from 'react'
import PropTypes from 'prop-types'
import './LinecapSelector.scss'

const square_img = (
    <svg viewBox="0 0 18 18">
        <g>
            <rect className="fill" x="0" y="0" width="18" height="18" />
            <rect className="stroke" x="6.8" y="6.8" width="4.5" height="4.5" />
            <rect className="stroke" x="8.1" y="8.3" width="9.9" height="1.5" />
        </g>
    </svg>
)
const round_img = (
    <svg viewBox="0 0 18 18">
        <g>
            <path
                className="fill"
                d="M8.1,18C3.6,18,0,14.4,0,9.9V8.1C0,3.6,3.6,0,8.1,0H18v18H8.1z"
            />
            <rect className="stroke" x="6.8" y="6.8" width="4.5" height="4.5" />
            <rect className="stroke" x="8.1" y="8.2" width="9.9" height="1.5" />
        </g>
    </svg>
)
const butt_img = (
    <svg viewBox="0 0 18 18">
        <g>
            <rect x="2.2" className="fill" width="15.8" height="18" />
            <rect className="stroke" y="6.8" width="4.5" height="4.5" />
            <rect
                className="stroke"
                x="1.3"
                y="8.2"
                width="16.7"
                height="1.5"
            />
        </g>
    </svg>
)

const LinecapSelector = ({ onChange, value }) => (
    <div className="linecap-selector">
        <div
            className={value === 'square' ? 'option selected' : 'option'}
            onClick={() => onChange('square')}
        >
            {square_img}
        </div>
        <div
            className={value === 'round' ? 'option selected' : 'option'}
            onClick={() => onChange('round')}
        >
            {round_img}
        </div>
        <div
            className={value === 'butt' ? 'option selected' : 'option'}
            onClick={() => onChange('butt')}
        >
            {butt_img}
        </div>
    </div>
)

LinecapSelector.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default LinecapSelector
