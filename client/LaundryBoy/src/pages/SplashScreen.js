import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { color, util, components, font } from '../styles'
import BaseLayout from './BaseLayout'

export default class SplashScreen extends Component {
    componentWillMount() {
        setTimeout(() => {
            Actions.index()
        }, 3000)
    }

    render() {
        return (
            <View style={[ util.BG_DEFAULT, { flex: 1, paddingTop: 180 } ]}>
                <Icon name="grain" size={ 200 } color={ color.SECONDARY }
                    style={{ textAlign: 'center' }}/>
                <Text style={[ font.LARGE, font.BOLD, font.ITALIC, util.TEXT_INVERSE, util.TEXT_CENTER ]}>
                    LaundryBoy
                </Text>
            </View>
        )
    }
}
