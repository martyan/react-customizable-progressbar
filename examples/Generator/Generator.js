import React from 'react'
import ProgressBar from '../../src/ReactCustomizableProgressbar'
import Controls from './Controls'
import ImplementationCode from './ImplementationCode'
import { 
  defaultState, 
  example1State,
  example2State,
  example3State,
  example4State,
  example5State
} from './predefinedStates'
import './Generator.scss'

const Indicator = (props) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'absolute',
      top: '0',
      width: '100%',
      height: '100%',
      margin: '0 auto',
      color: 'black',
      fontSize: '1.3em',
      ...props.style
    }}>
      <div style={{fontSize: '1.3em'}}>{props.progress}/{props.steps}</div>
    </div>
  )
}

class Generator extends React.Component {

  state = {
    ...defaultState,
    codeVisible: false
  }

  handleChange = (key, value) => {
    this.setState({[key]: value})
  }

  handleNumberChange = (key, e) => {
    this.setState({[key]: parseInt(e.target.value)})
  }

  handleCheckboxChange = (key, e) => {
    this.setState({[key]: e.target.checked === true})
  }

  renderThumb = (state) => (
    <div onClick={() => this.setState({...state})} className="thumb">
      <ProgressBar {...state} 
           radius={50}
           strokeWidth={state.strokeWidth/2}
           trackStrokeWidth={state.trackStrokeWidth/2}
           pointerRadius={state.pointerRadius/2}
           pointerStrokeWidth={state.pointerStrokeWidth/2}
      >
        <Indicator progress={state.progress} steps={state.steps} style={{fontSize: '.7em', color: '#aaa', fontWeight: '100'}} />
      </ProgressBar>
    </div>    
  )

  render = () => {
    const { codeVisible } = this.state

    const handlers = {
      handleChange: this.handleChange,
      handleNumberChange: this.handleNumberChange,
      handleCheckboxChange: this.handleCheckboxChange
    }

    return (
      <div className="generator">
        <div className="thumbs">
          {this.renderThumb(defaultState)}
          {this.renderThumb(example1State)}
          {this.renderThumb(example2State)}
          {this.renderThumb(example3State)}
          {this.renderThumb(example4State)}
          {this.renderThumb(example5State)}
        </div>

        <div className="bar-controls">
          <div className="bar">
            <ImplementationCode {...this.state} 
                                defaultState={defaultState}
                                toggleCode={codeVisible => this.setState({codeVisible})}
            />
            {!codeVisible &&
              <ProgressBar {...this.state} className="progressbar">
                <Indicator progress={this.state.progress} steps={this.state.steps} />
              </ProgressBar>
            }
          </div>
          <Controls {...this.state}
                    {...handlers} 
                    type="main"
                    defaultState={defaultState}
          />
        </div>

        <div className="style-controls">
          <Controls {...this.state}
                    {...handlers} 
                    type="progress"
                    defaultState={defaultState}
          />
          <Controls {...this.state}
                    {...handlers} 
                    type="track"
                    defaultState={defaultState}
          />
          <Controls {...this.state}
                    {...handlers} 
                    type="pointer"
                    defaultState={defaultState}
          />  
        </div>
      </div>
    )
  }

}

export default Generator