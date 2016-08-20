import React, { Component } from 'react'
import { ScrollView, RefreshControl, Text } from 'react-native'

import { font, util } from '../styles'
import Base from './Base'
import Button from '../components/Button'

export default class Home extends Component {
    store

    constructor(props) {
        super()
        this.store = props.store
    }

    fetchData() {
        console.log('Fetching data from an external API...')
        this.store.fetchData()
    }

    render() {
        return (
            <Base>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.store.isLoading}
                            onRefresh={this.fetchData.bind(this)} />
                        }>

                    <Text style={[ font.DEFAULT, util.PUSH_BOTTOM ]}>
                        This is the Home page
                    </Text>
                    
                    <Button style={[ util.BG_PRIMARY, util.PUSH_BOTTOM ]} onPress={this.fetchData.bind(this)}>
                        <Text style={[ font.DEFAULT, util.TEXT_INVERSE, util.TEXT_CENTER ]}>
                            { this.store.isLoading 
                                ? 'Fetching data...'
                                : 'Fetch data from an external API' }
                            { this.store.message ? "\n" + this.store.message : null }
                        </Text>
                    </Button>
                    
                    
                    <Button style={ util.BG_ACCENT } onPress={this.store.increase}>
                        <Text style={[ font.DEFAULT, util.TEXT_INVERSE, util.TEXT_CENTER ]}>
                            Counter: { this.store.counter }
                        </Text>
                    </Button>
                </ScrollView>
            </Base>
        )
    }
}
