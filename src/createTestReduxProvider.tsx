import React, { ReactNode, FC } from 'react';
import createMockStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Middleware } from 'redux';

interface Props {
    children: ReactNode;
}

const createTestReduxProvider = (reduxState: object, useThunk: boolean):
    [ReactNode, MockStoreEnhanced<typeof reduxState, object>] => {
    const middleware: Array<Middleware> = [];
    if (useThunk) {
        middleware.push(thunk);
    }

    const mockStore: MockStoreCreator<typeof reduxState, object> = createMockStore(middleware);
    const store: MockStoreEnhanced<typeof reduxState, object> = mockStore(reduxState);

    const ReduxProvider: FC<Props> = (props: Props) => {
        const { children } = props;
        return (
            <Provider store={ store }>
                { children }
            </Provider>
        );
    };

    return [ReduxProvider, store];
};

export default createTestReduxProvider;
