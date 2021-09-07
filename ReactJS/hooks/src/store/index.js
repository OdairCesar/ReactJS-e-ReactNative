import { reducer } from './reducers'
import { number_add2 } from './actions/number'
const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export {
    initialState,
    reducer,
    number_add2
}
