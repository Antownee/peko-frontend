import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store/index";
import { IntlProvider } from "react-intl";
import messages_fa from "./translations/fa.json";
import messages_en from "./translations/en.json";
import App from './App';
import * as serviceWorker from './serviceWorker';

const messages = {
    'fa': messages_fa,
    'en': messages_en
};

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale='en' messages={messages['en']}>
            <App />
        </IntlProvider>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
