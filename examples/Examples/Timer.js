import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Timer extends Component {
    state = {
        elapsed: 0
    }

    componentDidMount = () => {
        this.start()
    }

    componentWillUnmount = () => {
        this.clear()
    }

    start = () => {
        if (this.interval) clearInterval(this.interval)

        this.interval = setInterval(() => {
            const { initialSeconds, totalSeconds } = this.props
            if (this.state.elapsed + initialSeconds === totalSeconds) {
                if (this.interval) clearInterval(this.interval)
                return
            }
            const elapsed = this.state.elapsed + 1
            this.setState({ elapsed })
            if (this.props.onChange) this.props.onChange(elapsed)
        }, this.props.interval)
    }

    clear = () => {
        if (this.interval) clearInterval(this.interval)
    }

    render = () => null
}

Timer.propTypes = {
    initialSeconds: PropTypes.number.isRequired,
    totalSeconds: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    interval: PropTypes.number.isRequired
}

export default Timer
