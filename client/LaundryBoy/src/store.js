import { reaction, observable, observe, computer, autoron } from 'mobx'
import { Actions } from 'react-native-router-flux'
import autobind from 'autobind-decorator'
import axios from 'axios'
import env from './env'

@autobind
class AppStore {

}

@autobind
class DashboardStore {
    @observable isLoading = false
    @observable errors = []
    @observable orders = []

    fetchOrders() {
        // this.orders = [{"id":1,"status":0,"created":null,"weight":"1.2 kg","cost":"PHP 128.00","remarks":"","laundromat":{"id":1,"name":"Lavandera Ko"}},{"id":2,"status":1,"created":null,"weight":"2.1 kg","cost":"PHP 212.00","remarks":"Dry clean","laundromat":{"id":1,"name":"SUDS Laundry"}},{"id":3,"status":2,"created":null,"weight":"1.3 kg","cost":"PHP 132.00","remarks":"","laundromat":{"id":1,"name":"Lavandera Ko"}},{"id":4,"status":3,"created":null,"weight":"1.3 kg","cost":"PHP 132.00","remarks":"","laundromat":{"id":1,"name":"Lavandera Ko"}},{"id":5,"status":4,"created":null,"weight":"1.3 kg","cost":"PHP 132.00","remarks":"","laundromat":{"id":1,"name":"Lavandera Ko"}}]
        // return

        this.isLoading = true
        this.orders = []
        axios.get(env.BASE_URL + '/orders')
            .then(response => {
                this.orders = response.data
                this.isLoading = false
            })
            .catch(error => {
                console.error(error)
                this.errors.push('Failed to retrieve orders')
            })
    }
}

@autobind
class NearbyLaundromatsStore {
    @observable isLoading = false
    @observable errors = []
    @observable laundromats = []

    fetchLaundromats() {
        // this.laundromats = [{"id":1,"name":"Lavandera Ko","phone":"+63 998 765 4321","business_hours":"7AM to 10PM","address":"123 Test Building, Test Street, Test City"},{"id":2,"name":"SUDS Laundry","phone":"+63 998 765 4321","business_hours":"7AM to 10PM","address":"123 Test Building, Test Street, Test City"}]
        // return

        this.isLoading = true
        this.laundromats = []
        axios.get(env.BASE_URL + '/laundromats')
            .then(response => {
                this.laundromats = response.data
                this.isLoading = false
            })
            .catch(error => {
                console.error(error)
                this.errors.push('Failed to retrieve laundromats')
            })
    }
}

@autobind
class RequestPickupStore {
    @observable isLoading = false
    @observable laundromat = {}
    @observable form = {
        includesDryClean: false,
        requestPressing: false,
        notes: '',
    }
    @observable errors = []

    reset() {
        this.isLoading = false
        this.laundromat = {}
        this.form = {
            includesDryClean: false,
            requestPressing: false,
            notes: '',
        }   
    }

    doRequestPickup() {
        this.isLoading = true
        const data = { laundromat_id: this.laundromat.id, ...this.form }
        axios.post(env.BASE_URL + '/request_pickup', data)
            .then(response => {
                this.reset()
                Actions.index({ refreshOnLoad: true })
            })
            .catch(error => {
                console.error(error)
                this.errors.push('Failed to request pickup')
            })
    }
}

@autobind
class RequestDeliveryStore {
    @observable isLoading = false
    @observable order = {}
    @observable form = {
        bring_change_for: '' 
    }
    @observable errors = []

    reset() {
        this.isLoading = false
        this.order = {}
        this.form = {
            bring_change_for: '' 
        }
    }

    doRequestDelivery() {
        this.isLoading = true
        const data = { order_id: this.order.id, ...this.form }
        axios.post(env.BASE_URL + '/request_delivery', data)
            .then(response => {
                this.reset()
                Actions.index({ refreshOnLoad: true })
            })
            .catch(error => {
                console.error(error)
                this.errors.push('Failed to request delivery')
            })
    }
}

export default {
    app: new AppStore,
    dashboard: new DashboardStore,
    nearbyLaundromats: new NearbyLaundromatsStore,
    requestPickup: new RequestPickupStore,
    requestDelivery: new RequestDeliveryStore,
}
