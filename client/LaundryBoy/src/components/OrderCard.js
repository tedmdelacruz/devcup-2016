import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { font, components, util } from '../styles'
import Button from './Button'
import constants from '../constants'
import { status } from '../messages'

export default class OrderCard extends Component {
    render() {
        const order = this.props.order
        return (
            <View style={[ components.orderCard ]}>
                <View style={[ components.orderCardContent ]}>
                    <Text style={{ fontSize: 20 }}>{ order.laundromat.name }</Text>
                    <Text style={[ util.TEXT_MUTED ]}>{ status[order.status] }</Text>
                    <Text>{ order.cost }</Text>
                    <Text style={[ util.TEXT_MUTED, font.ITALIC ]}>{ order.remarks }</Text>
                </View>
                <Button style={[ components.orderCardButton ]} onPress={() => {}}>
                    <Text style={[ font.DEFAULT, util.TEXT_INVERSE, util.TEXT_CENTER ]}>Request Delivery</Text>
                </Button>
            </View>
        )
    }
}
