import React, { Component } from 'react'
import { Text } from 'react-native'

import { util, components, font } from '../styles'
import BaseLayout from './BaseLayout'

export default class RequestPickup extends Component {
    render() {
        return (
            <BaseLayout>
                <Text style={[ font.MEDIUM, util.TEXT_CENTER, util.PUSH_BOTTOM ]}>Request Pickup</Text>
            </BaseLayout>
        )
    }
}
