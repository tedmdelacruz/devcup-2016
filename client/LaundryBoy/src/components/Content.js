import React, { Component } from 'react'
import { View } from 'react-native'
import { components } from '../styles'

export default class Content extends Component {
    render() {
        return (
            <View style={ components.content }>
                { this.props.children }
            </View>
        )
    }
}