import React, { Context, FC, Component, ReactNode } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import PassThroughCompProps from './PassThroughCompProps';
import createTestReduxProvider from './createTestReduxProvider';
import createTestRouter from './createTestRouter';
import createTestContext from './createTestContext';

type AnyComponent<Props,State> = FC<Props> | Component<Props,State>;

interface CreatorArgs<Props = {}, State = {}, Ctx = {}> {
    component: AnyComponent<Props, object>; // TODO do I care about the state type?
    props?: Props;
    redux?: {
        state: State;
        useThunk?: boolean;
    }
    context?: {
        type: Context<Ctx>;
        value: Ctx;
    }
    router?: {
        initialRouterEntries: [string]
    }
}

interface MounterArgs<Props = {}, State = {}, Ctx = {}> {
    props?: Props;
    reduxState?: State;
    initialRouterEntries?: [string];
    contextValue?: Ctx;
}

const createDefaultComp = (): FC<PassThroughCompProps> => (props: PassThroughCompProps) => {
    const { children } = props;
    return (
        <div>
            { children }
        </div>
    );
};

interface Mounter {
    component: ReactWrapper<object,object>; // TODO need better type
    store: object; // TODO need generic type
}

const creator = (creatorArgs: CreatorArgs) => (mounterArgs: MounterArgs): Mounter => {
    let TestReduxProvider: FC<PassThroughCompProps> = createDefaultComp();
    let store: object = {}; // TODO need generic type here
    if (creatorArgs.redux) {
        const storeState = mounterArgs.reduxState || creatorArgs.redux.state;
        const providerAndStore = createTestReduxProvider(storeState || {}, creatorArgs.redux.useThunk || false);
        TestReduxProvider = providerAndStore[0];
        store = providerAndStore[1];
    }

    let TestRouter: FC<PassThroughCompProps> = createDefaultComp();
    if (creatorArgs.router) {
        const initialEntries = mounterArgs.initialRouterEntries || creatorArgs.router.initialRouterEntries;
        TestRouter = createTestRouter(initialEntries || []);
    }

    let TestContext: FC<PassThroughCompProps> = createDefaultComp();
    if (creatorArgs.context) {
        const value = mounterArgs.contextValue || creatorArgs.context.value;
        TestContext = createTestContext(creatorArgs.context.type, value);
    }

    const props = mounterArgs.props || creatorArgs.props || {};
    const TheComponent: AnyComponent<any, any> = creatorArgs.component; // TODO what is the type for this?

    const component: ReactWrapper<object,object> = mount( // TODO need generic types
        <TestRouter>
            <TestReduxProvider>
                <TestContext>
                    <TheComponent { ...props } />
                </TestContext>
            </TestReduxProvider>
        </TestRouter>
    );

    return {
        component,
        store
    };
};

export default creator;
