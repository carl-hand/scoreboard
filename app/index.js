/**
 * Created by carl.hand on 30/03/2017.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/player';
import Scoreboard from './components/Scoreboard';

const store = createStore(
    PlayerReducer
);

render(
    <Provider store={store}>
        <Scoreboard />
    </Provider>,
    document.getElementById("app")
);