import React from 'react';
import I18n, { injectAsyncI18n } from './rc-i18n';

injectAsyncI18n('TEST', require('./i18n'));

function App() {
    return (
        <div>
            <I18n  region={'TEST'} i18n="say_hi" />
        </div>
    );
}

export default App;
