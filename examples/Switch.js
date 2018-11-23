import React, { Component } from 'react'
import Examples from './Examples/Examples'
import Generator from './Generator/Generator'
import './global.scss'

const anchorStyle = {
	display: 'inline-block',
	margin: '10px',
	cursor: 'pointer'
}

class Switch extends Component {
	
	state = {
		active: 'examples'
	}

	renderComponent = () => {
		const { active } = this.state

		switch(active) {
			case 'examples':
				return <Examples />
			case 'generator':
				return <Generator />
			default:
				return null
		}
	}

	render = () => {
		return (
			<div>

				<div className="switch">
					<a style={anchorStyle} onClick={() => this.setState({active: 'examples'})}>Examples</a>			
					<a style={anchorStyle} onClick={() => this.setState({active: 'generator'})}>Generator</a>
				</div>
				
				{this.renderComponent()}

			</div>
		)
	}

}

export default Switch
