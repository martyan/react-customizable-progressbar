import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Observable } from 'rxjs'
import { ChromePicker } from 'react-color'
import './ColorSelector.scss'

class ColorSelector extends Component {

  state = {
    pickerVisible: false
  }

  componentDidMount = () => {
    Observable
      .fromEvent(window, 'click')
      .filter(() => this.state.pickerVisible)
      .subscribe(this.handleClick)
  }

  handleClick = (e) => {
    if(e.target !== this.wrapper && !this.wrapper.contains(e.target)) {
      this.setState({pickerVisible: false})
    }
  }

  render = () => {
    const { value, onChange } = this.props
    const { pickerVisible } = this.state

    return (
      <div className="color-selector" ref={elem => this.wrapper = elem}>
        <div className="color" style={{background: value}} onClick={() => this.setState({pickerVisible: !pickerVisible})}></div>
        {pickerVisible &&
          <ChromePicker color={value} 
                        onChange={color => onChange(color.hex)}
          />
        }
      </div>
    )
  }

}

ColorSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default ColorSelector