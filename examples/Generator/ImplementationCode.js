import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PrismCode from 'react-prism'
import prismjs from 'prismjs'
import { mainGroup, progressGroup, trackGroup, pointerGroup } from './Controls'
import 'prismjs/themes/prism.css'
import './ImplementationCode.scss'

class ImplementationCode extends Component {
    isModified = propName => {
        return this.props.defaultState[propName] !== this.props[propName]
    }

    renderButton = () => {
        const { codeVisible, toggleCode } = this.props

        return (
            <div className="btns">
                <button onClick={() => toggleCode(!codeVisible)}>
                    {!codeVisible ? 'Show code' : 'Show progress bar'}
                </button>
            </div>
        )
    }

    renderGroup = (group, condition) => {
        let code = ``
        group
            .filter((control, i) => (condition ? condition(i) : true))
            .forEach(control => {
                if (this.isModified(control.name)) {
                    switch (control.type) {
                        case 'text':
                        case 'linecap':
                        case 'color':
                            code += `    ${control.name}="${
                                this.props[control.name]
                            }"\n`
                            break
                        case 'checkbox':
                            code += `    ${control.name}\n`
                            break
                        default:
                            code += `    ${control.name}={${
                                this.props[control.name]
                            }}\n`
                            break
                    }
                }
            })
        return code
    }

    renderCode = () => {
        let code = `import ProgressBar from 'react-customizable-progressbar'\n\n`
        code += `<ProgressBar\n`
        code += `    radius={${this.props.radius}}\n`
        code += `    progress={${this.props.progress}}\n`

        code += this.renderGroup(mainGroup, i => i > 1)
        code += this.renderGroup(progressGroup)
        code += this.renderGroup(trackGroup)
        code += this.renderGroup(pointerGroup)

        code += `/>`

        return (
            <PrismCode component="pre" className="language-markup">
                {code}
            </PrismCode>
        )
    }

    render = () => {
        const { codeVisible } = this.props

        return (
            <div className="implementation-code">
                {this.renderButton()}
                {codeVisible && this.renderCode()}
            </div>
        )
    }
}

ImplementationCode.propTypes = {
    codeVisible: PropTypes.bool.isRequired,
    toggleCode: PropTypes.func.isRequired
}

export default ImplementationCode
