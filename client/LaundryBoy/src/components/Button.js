import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { components } from '../styles'

export default class Button extends Component {
    handlePress() {
        this.props.onPress()
    }

    render() {
        const buttonStyles = [ components.button ]
        if (this.props.style) {
            buttonStyles.push(this.props.style)
        }

        return (
            <TouchableHighlight style={buttonStyles}
                onPress={ this.handlePress.bind(this) }>

                { this.props.children }
            </TouchableHighlight>
        )
    }
}
