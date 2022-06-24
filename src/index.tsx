import React from 'react';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from 'src/utils/redux';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const AppComponent = (
    <Provider store={store}>
        <App />
    </Provider>
);

root.render(AppComponent);
