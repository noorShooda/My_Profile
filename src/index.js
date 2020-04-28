import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import { App } from './App';
import { stateStore } from './store';

render(
    <Provider store={stateStore}>
         <App/>
    </Provider>,
    document.getElementById('root')
);
