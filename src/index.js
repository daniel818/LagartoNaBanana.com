import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



import {addLocaleData, IntlProvider} from 'react-intl';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import pt from 'react-intl/locale-data/pt';

import {flattenMessages}from './utils'

import messages from './messages';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


addLocaleData([...en, ...es, ...pt]);

let locale = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

if (!messages[locale]) {
    locale = "en-US";
}

class LocalizedApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locale,
            messages: flattenMessages(messages[locale])
        };

        this.updateLocale = this.updateLocale.bind(this);
    }

    updateLocale(locale) {
        this.setState({
            locale,
            messages: flattenMessages(messages[locale])
        })
    }




    render() {
        const { locale, messages } = this.state;
        return (
                <IntlProvider key={locale} locale={locale} messages={messages}>
                    <App updateLocale={this.updateLocale}/>
                </IntlProvider>
        )
    }
}


ReactDOM.render(
    <LocalizedApp />
    , document.getElementById('root')
);

registerServiceWorker();