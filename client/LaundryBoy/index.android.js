import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'
import { Scene, Router } from 'react-native-mobx'

import store from './src/store'
import Dashboard from './src/pages/Dashboard'
import NearbyLaundromats from './src/pages/NearbyLaundromats'
import RequestPickup from './src/pages/RequestPickup'
import RequestDelivery from './src/pages/RequestDelivery'
import SplashScreen from './src/pages/SplashScreen'
import Settings from './src/pages/Settings'

export class App extends Component {    
    render() {
        return (
            <Router store={store}>
                <Scene key="root">
                    <Scene key="splash" component={SplashScreen} initial={true} hideNavBar={true}/>
                    <Scene key="index" component={Dashboard} hideNavBar={true}/>
                    <Scene key="nearbyLaundromats" component={NearbyLaundromats} hideNavBar={true}/>
                    <Scene key="requestPickup" component={RequestPickup} hideNavBar={true}/>
                    <Scene key="requestDelivery" component={RequestDelivery} hideNavBar={true}/>
                    <Scene key="settings" component={Settings} hideNavBar={true}/>
                </Scene>
            </Router>
        )
    }
}

AppRegistry.registerComponent('LaundryBoy', () => App)