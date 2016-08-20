import React, { Component } from 'react'
import { Text } from 'react-native'
import { util, components, font } from '../styles'
import BaseLayout from './BaseLayout'
import Button from '../components/Button'

export default class RequestPickup extends Component {
    constructor(props) {
        super()
        this.store = props.store.requestPickup
    }

    render() {
        const laundromat = this.props.laundromat
        return (
            <BaseLayout>
                <Text style={[ font.MEDIUM, util.TEXT_CENTER, util.PUSH_BOTTOM ]}>Request Pickup</Text>
                <Text style={[ font.LARGE, util.PUSH_BOTTOM ]}>{ laundromat.name }</Text>
                <Text style={[ font.DEFAULT, util.PUSH_BOTTOM ]}>{ laundromat.business_hours }</Text>
                <Text style={[ font.DEFAULT, util.PUSH_BOTTOM ]}>{ laundromat.address }</Text>
                <Text style={[ font.DEFAULT, util.PUSH_BOTTOM ]}>{ laundromat.phone }</Text>
                <Button onPress={ this.store.doRequestPickup }>
                    <Text style={[ font.DEFAULT, util.TEXT_INVERSE, util.TEXT_CENTER ]}>
                        { this.store.isLoading ? 'Requesting...' : 'Request New Pickup' }
                    </Text>
                </Button>
            </BaseLayout>
        )
    }
}
