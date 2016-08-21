import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
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
            <TouchableOpacity style={buttonStyles}
                onPress={ this.handlePress.bind(this) }
                activeOpacity={ 0.8 }>

                { this.props.children }
            </TouchableOpacity>
        )
    }
}
