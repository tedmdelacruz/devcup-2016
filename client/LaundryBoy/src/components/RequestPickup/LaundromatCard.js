import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { font, components, util } from '../../styles'
import Button from '../Button'

export default class LaundromatCard extends Component {
    render() {
        const laundromat = this.props.laundromat
        return (
            <View style={[ components.orderCard ]}>
                <View style={[ components.orderCardContent ]}>
                    <Text style={{ fontSize: 20 }}>{ laundromat.name }</Text>
                    <Text>{ laundromat.business_hours }</Text>
                    <Text>{ laundromat.address }</Text>
                </View>
                <Button style={[ components.orderCardButton ]} onPress={() => {}}>
                    <Text style={[ font.DEFAULT, util.TEXT_INVERSE, util.TEXT_CENTER ]}>Request Pickup</Text>
                </Button>
            </View>
        )
    }
}
