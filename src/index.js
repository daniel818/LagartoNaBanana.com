import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



import {addLocaleData, IntlProvider} from 'react-intl';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';

import {flattenMessages}from './utils'

import messages from './messages';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

// ReactDOM.render(
    {/*<BrowserRouter>*/}
        {/*<Switch>*/}
            {/*<Route path="/" component={App} />*/}
        {/*</Switch>*/}
    {/*</BrowserRouter>, document.getElementById('root'));*/}
// registerServiceWorker();

{/*<BrowserRouter>*/}
    {/*<Switch>*/}
        {/*<Route path="/" component={App} />*/}
    {/*</Switch>*/}
{/*</BrowserRouter>*/}

addLocaleData([...en, ...es, ...fr]);

let locale = (navigator.languages && navigator.languages[0])
||navigator.language
||navigator.userLanguage
|| 'en-US';


ReactDOM.render(

    <IntlProvider local={locale} messages={flattenMessages(messages[locale])}>
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>

    </IntlProvider>

        , document.getElementById('root'));

registerServiceWorker();