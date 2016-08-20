import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'
import { Scene, Router } from 'react-native-mobx'

import store from './src/store'
import Dashboard from './src/pages/Dashboard'
import NearbyLaundromats from './src/pages/NearbyLaundromats'
import RequestPickup from './src/pages/RequestPickup'
import Settings from './src/pages/Settings'
import PushNotification from './src/pushNotification'

export class App extends Component {
    componentWillMount() {
        PushNotification.localNotification({
            message: 'Hey there',
            playSound: true,
        })
    }
    
    render() {
        return (
            <Router store={store}>
                <Scene key="root">
                    <Scene key="index" component={Dashboard} initial={true} hideNavBar={true}/>
                    <Scene key="nearbyLaundromats" component={NearbyLaundromats} hideNavBar={true}/>
                    <Scene key="requestPickup" component={RequestPickup} hideNavBar={true}/>
                    <Scene key="settings" component={Settings} hideNavBar={true}/>
                </Scene>
            </Router>
        )
    }
}

AppRegistry.registerComponent('LaundryBoy', () => App)