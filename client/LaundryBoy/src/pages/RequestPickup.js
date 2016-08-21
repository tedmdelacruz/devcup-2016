import React, { Component } from 'react'
import { ScrollView, Text, View, Switch, TextInput } from 'react-native'
import { color, util, components, font } from '../styles'
import BaseLayout from './BaseLayout'
import Button from '../components/Button'

export default class RequestPickup extends Component {
    constructor(props) {
        super()
        this.store = props.store.requestPickup
        this.store.laundromat = props.laundromat
    }

    render() {
        const laundromat = this.props.laundromat
        return (
            <BaseLayout>
                <ScrollView style={{ paddingBottom: 100 }}>
                    <View style={[ util.PUSH_BOTTOM, util.BG_INVERSE_ALT, util.PAD ]}>
                        <Text style={[ font.MEDIUM, font.BOLD, util.TEXT_CENTER, util.PUSH_BOTTOM ]}>Request Pickup</Text>
                        <Text style={[ font.LARGE, util.TEXT_CENTER, util.PUSH_BOTTOM ]}>{ laundromat.name }</Text>
                        <Text style={[ util.PUSH_BOTTOM ]}>{ laundromat.business_hours }</Text>
                        <Text style={[ util.PUSH_BOTTOM ]}>{ laundromat.address }</Text>
                        <Text style={[ util.PUSH_BOTTOM ]}>{ laundromat.phone }</Text>
                        <Text style={[ util.PUSH_BOTTOM ]}>{ laundromat.base_price }</Text>
                    </View>
                    
                    <View style={[ util.PUSH_BOTTOM, { flexDirection: 'row' } ]}>
                        <Text style={[ font.DEFAULT, { flex: 6 } ]}>Includes Dry Clean</Text>
                        <Switch style={{ flex: 1 }}
                            onValueChange={(value) => this.store.form.includesDryClean = value }
                            value={ this.store.form.includesDryClean }/>
                    </View>
                    
                    <View style={[ util.PUSH_BOTTOM, { flexDirection: 'row' } ]}>
                        <Text style={[ font.DEFAULT, { flex: 6 } ]}>Request Pressing</Text>
                        <Switch style={{ flex: 1 }} 
                            onValueChange={(value) => this.store.form.requestPressing = value }
                            value={ this.store.form.requestPressing }/>
                    </View>
                    
                    <View style={[ util.PUSH_BOTTOM ]}>
                        <Text style={[ font.DEFAULT ]}>Notes to laundromat: </Text>
                        <TextInput
                            onChangeText={(value) => this.store.form.notes = value}
                            value={ this.store.form.notes }/>
                    </View>

                    <Button onPress={ this.store.doRequestPickup }>
                        <Text style={[ font.DEFAULT, util.TEXT_INVERSE, util.TEXT_CENTER ]}>
                            { this.store.isLoading ? 'Requesting...' : 'Request New Pickup' }
                        </Text>
                    </Button>
                </ScrollView>
            </BaseLayout>
        )
    }
}
