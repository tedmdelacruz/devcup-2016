import React, { Component } from 'react'
import { ScrollView, TouchableHighlight, View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { block, components, font, color } from '../styles'
import Button from './Button'

export default class Drawer extends Component {
    render() {
        return (
            <ScrollView style={ components.drawer }>
                <TouchableHighlight style={ components.drawerItem } onPress={ Actions.index }>
                    <Text style={ font.DEFAULT }>
                        Dashboard
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={ components.drawerItem } onPress={ Actions.settings }>
                    <Text style={ font.DEFAULT }>
                        Settings
                    </Text>
                </TouchableHighlight>
            </ScrollView>
        )
    }
}
