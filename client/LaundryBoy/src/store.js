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
        this.orders =  [{"id":1,"status":"Ready for delivery","created":null,"weight":"1.2 kg","pending_payment":"PHP 128.00","laundromat":{"id":1,"name":"Lavandera Ko"}},{"id":2,"status":"Awaiting confirmation","created":null,"weight":"2.1 kg","pending_payment":"PHP 212.00","laundromat":{"id":1,"name":"Lavandera Ko"}}];
        return

        this.isLoading = true
        console.log(env.BASE_URL + '/orders')
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

export default {
    app: new AppStore,
    dashboard: new DashboardStore
}
