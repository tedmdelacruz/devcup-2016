import { reaction, observable, observe, computer, autoron } from 'mobx'
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
        // this.orders = [{"id":1,"status":"Ready for pickup","created":null,"weight":"1.2 kg","cost":"PHP 128.00","laundromat":{"id":1,"name":"Lavandera Ko"}},{"id":2,"status":"Awaiting confirmation","created":null,"weight":"2.1 kg","cost":"PHP 212.00","laundromat":{"id":1,"name":"Lavandera Ko"}},{"id":3,"status":"Awaiting confirmation","created":null,"weight":"1.3 kg","cost":"PHP 132.00","laundromat":{"id":1,"name":"Lavandera Ko"}}];
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
        // this.laundromats = [{"id":1,"name":"Lavandera Ko","business_hours":"7AM to 10PM","address":"123 Test Building, Test Street, Test City"}];
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

export default {
    app: new AppStore,
    dashboard: new DashboardStore,
    nearbyLaundromats: new NearbyLaundromatsStore
}
