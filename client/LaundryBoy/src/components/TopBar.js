import React, { Component } from 'react'
import { ToolbarAndroid, TouchableHighlight, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Button from './Button'
import { config } from '../config'
import { color, components, font } from '../styles'

export default class TopBar extends Component {
    openDrawer() {
        this.props.openDrawer()
    }

    render() {
        return (
            <View style={ components.toolbarContainer }>
                <Button style={ components.toolbarDrawerIcon }
                    onPress={ this.openDrawer.bind(this) }>
                    
                    <Icon name="menu" size={ 30 } color={ color.SECONDARY }
                        style={{ textAlign: 'center' }}/>
                </Button>

                <ToolbarAndroid
                    style={ components.toolbar }   
                    title={ config.APP_NAME }
                    titleColor={ color.SECONDARY } />
            </View>
        )
    }
}
