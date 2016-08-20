import React, { Component } from 'react'
import { Text } from 'react-native'
import { util, components, font } from '../styles'
import BaseLayout from './BaseLayout'

export default class Settings extends Component {
    render() {
        return (
            <BaseLayout>
                <Text>This is the Settings page</Text>
            </BaseLayout>
        )
    }
}
