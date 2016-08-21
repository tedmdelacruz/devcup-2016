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
        this.laundromats = [{"id":1,"name":"Ted's Laundromat","email":"tedmdelacruz@gmail.com","base_price":27,"business_hours":"7am to 10pm","phone":"(0998) 765 4321","address":"123 Test Building, Test Street, Test City","user_id":1,"created_at":"2016-08-21 05:17:07","updated_at":"2016-08-21 05:23:09"}]
        return

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
        includes_dry_clean: false,
        request_pressing: false,
        notes: '',
    }
    @observable errors = []

    reset() {
        this.isLoading = false
        this.laundromat = {}
        this.form = {
            includes_dry_clean: false,
            request_pressing: false,
            notes: '',
        }   
    }

    doRequestPickup() {
        this.isLoading = true
        const data = {
            laundromat_id: this.laundromat.id, 
            user_id: 2, // FIXME
             ...this.form
        }
        console.log(data)

        axios.post(env.BASE_URL + '/request_pickup', data)
            .then(response => {
                console.log(response)
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
