import {createStore, combineReducers} from 'redux'
import dialogsReducer from './reducers/dialog-reducer'
import {profileReducer} from './reducers/profile-reduser'

let reducers = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer
})

 let store  = createStore(reducers);

 export default store;

