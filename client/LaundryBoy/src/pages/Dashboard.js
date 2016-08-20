import React, { Component } from 'react'
import { ScrollView, RefreshControl, View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { font, util } from '../styles'
import BaseLayout from './BaseLayout'
import Button from '../components/Button'
import OrderCard from '../components/OrderCard'

export default class Dashboard extends Component {
    store = {}

    constructor(props) {
        super()
        this.store = props.store.dashboard
    }

    componentWillMount() {
        this.store.fetchOrders()
    }

    render() {
        return (
            <BaseLayout>
                <Text style={[ font.MEDIUM, util.TEXT_CENTER, util.PUSH_BOTTOM ]}>My Orders</Text>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={ this.store.isLoading }
                            onRefresh={ this.store.fetchOrders.bind(this) } />
                        }>

                        { this.store.orders.map((order, idx) => 
                            <OrderCard order={ order } key={ idx }/>
                        ) }
                </ScrollView>

                <Button style={[ util.BG_ACCENT ]} onPress={ Actions.nearbyLaundromats }>
                    <Text style={[ font.DEFAULT, util.TEXT_INVERSE, util.TEXT_CENTER ]}>Request Pickup</Text>
                </Button>
            </BaseLayout>
        )
    }
}
