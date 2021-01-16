import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import App from './App';
import { UserProvider } from './components/Contexts/UserContexts';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
