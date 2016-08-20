import { reaction, observable, observe, computer, autoron } from 'mobx'
import autobind from 'autobind-decorator'
import axios from 'axios'
import env from './env'

@autobind
class Store {
    @observable counter = 0
    @observable isLoading = false
    @observable message = ''

    increase() {
        this.counter++
    }

    fetchData() {
        this.isLoading = true
        this.message = ''

        axios.get(env.BASE_URL + '/test')
            .then(response => {
                this.message = response.data.message
                this.isLoading = false
            })
            .catch(error => console.error(error))
    }
}

export default new Store()
