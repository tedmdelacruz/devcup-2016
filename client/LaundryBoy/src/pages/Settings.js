import React, { Component } from 'react'
import { Text } from 'react-native'

import { block, components, font } from '../styles'
import Base from './Base'

export default class Settings extends Component {
    render() {
        return (
            <Base>
                <Text>This is the Settings page</Text>
            </Base>
        )
    }
}
