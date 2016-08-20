import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { font, components, util } from '../styles'
import Button from './Button'

export default class LaundromatCard extends Component {
    constructor(props) {
        super()
        this.store = props.store.RequestPickup
    }

    handleRequest() {
        Actions.requestPickup({ laundromat: this.props.laundromat })
    }

    render() {
        const laundromat = this.props.laundromat
        return (
            <View style={[ components.orderCard ]}>
                <View style={[ components.orderCardContent ]}>
                    <Text style={[ font.MEDIUM ]}>{ laundromat.name }</Text>
                    <Text>{ laundromat.business_hours }</Text>
                    <Text>{ laundromat.address }</Text>
                    <Text>{ laundromat.phone }</Text>
                </View>
                <Button style={[ components.orderCardButton ]} onPress={ this.handleRequest.bind(this) }>
                    <Text style={[ font.DEFAULT, util.TEXT_INVERSE, util.TEXT_CENTER ]}>Request Pickup</Text>
                </Button>
            </View>
        )
    }
}
