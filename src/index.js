import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './state/redux-store'
import { ContextStore } from './state/context';


export let render = () => {
    ReactDOM.render( 
        <React.StrictMode>
            <ContextStore.Provider value={store}>
                <App state = { store.getState() } dispatch = { store.dispatch.bind(store)} />  
            </ContextStore.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
render();
store.subscribe(() => {
    render(store.getState())
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();