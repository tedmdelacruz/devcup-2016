import React, { Component } from 'react'
import { ScrollView, RefreshControl, View, Text } from 'react-native'

import { font, util } from '../styles'
import Base from './Base'
import Button from '../components/Button'
import OrderCard from '../components/Dashboard/OrderCard'

export default class Dashboard extends Component {
    store = {}

    constructor(props) {
        super()
        this.store = props.store.dashboard
        this.store.fetchOrders()
    }

    handleRequestPickup() {

    }

    render() {
        return (
            <Base>
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

                <Button style={[ util.BG_ACCENT ]} onPress={ this.handleRequestPickup.bind(this) }>
                    <Text style={[ font.DEFAULT, util.TEXT_INVERSE, util.TEXT_CENTER ]}>Request Pickup</Text>
                </Button>
            </Base>
        )
    }
}
