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
    @observable errors = []

    doRequestPickup() {
        this.isLoading = true
        axios.post(env.BASE_URL + '/request_pickup', { ...this.laundromat })
            .then(response => {
                this.laundromat = {}
                Actions.index({ refreshOnLoad: true })
                this.isLoading = false
            })
            .catch(error => {
                console.error(error)
                this.errors.push('Failed to request pickup')
            })
    }
}

export default {
    app: new AppStore,
    dashboard: new DashboardStore,
    nearbyLaundromats: new NearbyLaundromatsStore,
    requestPickup: new RequestPickupStore,
}
