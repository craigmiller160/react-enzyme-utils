import React from 'react';

const createProvider = (storeState, useThunk) => {
    const { Provider } = require('react-redux');
    const configureMockStore = require('redux-mock-store').default;

    let middleware = [];
    if (useThunk) {
        const thunk = require('redux-thunk').default;
        middleware.push(thunk);
    }

    const mockStore = configureMockStore(middleware);
    const store = mockStore(storeState);

    const ReduxProvider = (props) => (
        <Provider store={ store }>
            { props.children }
        </Provider>
    );

    return [ReduxProvider, store];
};

const createTestReduxProvider = async (reduxState: object, useThunk: boolean) => {
    const { Provider } = await import('react-redux');
    const configureMockStore = await import('redux-mock-store');

    const middleware: Array<any> = []; // TODO what type for the array?
    if (useThunk) {
        const thunk = await import('redux-thunk');
        middleware.push(thunk);
    }

    const mockStore = configureMockStore(middleware); // TODO why is this not working?
    const store = mockStore(reduxState);

    // TODO finish this
};

export default createTestReduxProvider;
