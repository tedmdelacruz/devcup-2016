import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { font, components, util } from '../styles'
import Button from './Button'
import constants from '../constants'
import { status } from '../messages'

export default class OrderCard extends Component {

    // Generate OrderCard button based on order status
    // TODO: This could be moved to the store (?)
    generateButton() {
        const order = this.props.order
        let handlePress = () => {}
        let buttonStyle = util.BG_MUTED
        let buttonTextStyle = {}
        let buttonText = 'Contact Laundromat'

        switch (order.status) {
            case constants.AWAITING_PICKUP_CONFIRM: 
            case constants.PICKUP_CONFIRMED:
            case constants.RECEIVED:
            case constants.COMPLETED:
                buttonStyle = util.BG_MUTED
                buttonText = 'Contact Laundromat'
                break
            case constants.READY_FOR_DELIVERY:
                buttonStyle = util.BG_DEFAULT
                buttonText = 'Request Delivery'
                handlePress = () => Actions.requestDelivery({ order })
                break
        }
        
        return (
            <Button style={[ components.orderCardButton, buttonStyle ]} onPress={handlePress}>
                <Text style={[ font.DEFAULT, util.TEXT_INVERSE, util.TEXT_CENTER ]}>
                    { buttonText }
                </Text>
            </Button>
        )
    }

    render() {
        const order = this.props.order

        if (order.status == constants.COMPLETED) return null

        return (
            <View style={[ components.orderCard ]}>
                <View style={[ components.orderCardContent ]}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 3 }}>
                            <Text style={{ fontSize: 20 }}>{ order.laundromat.name }</Text>
                            <Text style={[ util.TEXT_MUTED ]}>{ status[order.status] }</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            { order.weight ? <Text style={ util.TEXT_RIGHT }>Weight: { order.weight }</Text> : null}
                            { order.cost ? <Text style={[ util.TEXT_RIGHT, util.TEXT_ACCENT ]}>{ order.cost }</Text> : null}
                        </View>
                    </View>
                    { order.notes 
                        ? <Text style={[ util.TEXT_MUTED, font.ITALIC ]}>Notes: { order.notes }</Text>
                        : null }
                    
                </View>

                { this.generateButton() }

            </View>
        )
    }
}
