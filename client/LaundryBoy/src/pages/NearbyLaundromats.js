import React, { Component } from 'react'
import { ScrollView, RefreshControl, Text } from 'react-native'
import { util, components, font } from '../styles'
import BaseLayout from './BaseLayout'
import LaundromatCard from '../components/LaundromatCard'

export default class NearbyLaundromats extends Component {
    constructor(props) {
        super()
        this.store = props.store.nearbyLaundromats
    }

    componentWillMount() {
        this.store.fetchLaundromats()
    }

    render() {
        return (
            <BaseLayout>
                <Text style={[ font.MEDIUM, util.TEXT_CENTER, util.PUSH_BOTTOM ]}>Nearby Laundromats</Text>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={ this.store.isLoading }
                            onRefresh={ this.store.fetchLaundromats.bind(this) } />
                        }>

                        { this.store.laundromats.map((laundromat, idx) => 
                            <LaundromatCard laundromat={ laundromat } key={ idx }
                                store={ this.props.store.requestPickup }/>
                        ) }
                </ScrollView>
            </BaseLayout>
        )
    }
}
