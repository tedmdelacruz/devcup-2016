import React, { Component } from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { components, font, color } from '../styles'

export default class BottomNav extends Component {
    render() {
        return(
            <View style={ components.bottomNav }>
                <TouchableHighlight style={ components.bottomNavItem } onPress={ Actions.index }>
                    <Text style={ components.bottomNavItemText }>Dashboard</Text>
                </TouchableHighlight>

                <TouchableHighlight style={ components.bottomNavItem } onPress={ Actions.settings }>
                    <Text style={ components.bottomNavItemText }>Settings</Text>
                </TouchableHighlight>
            </View>
        )
    }
}