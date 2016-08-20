import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'
import { Scene, Router } from 'react-native-mobx'

import store from './src/store'
import Home from './src/pages/Home'
import Settings from './src/pages/Settings'

export class App extends Component {
    render() {
        return (
            <Router store={store}>
                <Scene key="root">
                    <Scene key="index" component={Home} initial={true} hideNavBar={true}/>
                    <Scene key="settings" component={Settings} hideNavBar={true}/>
                </Scene>
            </Router>
        )
    }
}

AppRegistry.registerComponent('LaundryBoy', () => App)