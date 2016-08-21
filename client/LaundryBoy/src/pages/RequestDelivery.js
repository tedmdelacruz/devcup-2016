import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput } from 'react-native'
import { util, components, font } from '../styles'
import BaseLayout from './BaseLayout'
import Button from '../components/Button'

export default class RequestDelivery extends Component {
    constructor(props) {
        super()
        this.store = props.store.requestDelivery
        this.order = props.order
    }

    render() {
        const order = this.order
        return (
            <BaseLayout>
                <View style={[ util.PUSH_BOTTOM, util.BG_INVERSE_ALT, util.PAD ]}>
                    <Text style={[ font.MEDIUM, font.BOLD, util.TEXT_CENTER, util.PUSH_BOTTOM ]}>Request Delivery</Text>
                    <Text style={[ font.LARGE, util.TEXT_CENTER, util.PUSH_BOTTOM ]}>{ order.cost }</Text>
                    <Text style={[ font.MEDIUM, util.TEXT_CENTER, util.PUSH_BOTTOM ]}>Weight: { order.weight }</Text>
                    <Text style={[ font.MEDIUM, util.TEXT_CENTER, util.PUSH_BOTTOM ]}>{ order.laundromat.name }</Text>
                </View>
                    
                <View style={[ util.PUSH_BOTTOM ]}>
                    <Text style={[ font.DEFAULT ]}>Bring change for: </Text>
                    <TextInput
                        keyboardType='numeric'
                        onChangeText={(value) => this.store.form.bring_change_for = value}
                        value={ this.store.form.bring_change_for }/>
                </View>


                <Button onPress={ this.store.doRequestDelivery }>
                    <Text style={[ font.DEFAULT, util.TEXT_INVERSE, util.TEXT_CENTER ]}>
                        { this.store.isLoading ? 'Requesting...' : 'Request Delivery' }
                    </Text>
                </Button>
            </BaseLayout>
        )
    }
}
