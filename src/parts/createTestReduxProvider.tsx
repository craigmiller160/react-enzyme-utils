import React, { FC } from 'react';
import createMockStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Middleware } from 'redux';

function createTestReduxProvider<State>(reduxState: State, useThunk: boolean):
    [FC<PassThroughCompProps>, MockStoreEnhanced<State, object>] {
    const middleware: Array<Middleware> = [];
    if (useThunk) {
        middleware.push(thunk);
    }

    const mockStore: MockStoreCreator<State, object> = createMockStore(middleware);
    const store: MockStoreEnhanced<State, object> = mockStore(reduxState);

    const ReduxProvider: FC<PassThroughCompProps> = (props: PassThroughCompProps) => {
        const { children } = props;
        return (
            <Provider store={ store }>
                { children }
            </Provider>
        );
    };

    return [ ReduxProvider, store ];
}

export default createTestReduxProvider;
