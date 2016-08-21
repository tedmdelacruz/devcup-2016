import React, { Component } from 'react'
import { Text } from 'react-native'
import { util, components, font } from '../styles'
import BaseLayout from './BaseLayout'

export default class RequestDelivery extends Component {
    constructor(props) {
        super()
        this.store = props.store.requestDelivery
        this.store.order = props.order
    }
    render() {
        return (
            <BaseLayout>
            </BaseLayout>
        )
    }
}
