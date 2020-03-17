import React, { Context, FC, ComponentType } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MockStoreEnhanced } from 'redux-mock-store';
import createTestReduxProvider from './createTestReduxProvider';
import createTestRouter from './createTestRouter';
import createTestContext from './createTestContext';
import createDefaultComp from './createDefaultComp';

interface CreatorArgs<Props = {}, State = {}, Ctx = {}> {
    component: ComponentType<Props>;
    props?: Props;
    redux?: {
        state: State;
        useThunk?: boolean;
    };
    context?: {
        type: Context<Ctx>;
        value: Ctx;
    };
    router?: {
        initialRouterEntries: [string];
    };
}

interface MounterArgs<Props = {}, State = {}, Ctx = {}> {
    props?: Props;
    reduxState?: State;
    initialRouterEntries?: [string];
    contextValue?: Ctx;
}

interface Mounter<Props = {}, State = {}> {
    component: ReactWrapper<Props, object>;
    store?: MockStoreEnhanced<State, object>;
}

function creator<Props = {}, State = {}, Ctx = {}>(creatorArgs: CreatorArgs<Props, State, Ctx>) {
    return function mounter(mounterArgs: MounterArgs<Props, State, Ctx>): Mounter<Props> {
        let TestReduxProvider: FC<PassThroughCompProps> = createDefaultComp();
        let store: MockStoreEnhanced<State, object> | undefined;
        if (creatorArgs.redux) {
            const storeState = mounterArgs.reduxState || creatorArgs.redux.state;
            [ TestReduxProvider, store ] = createTestReduxProvider(storeState, creatorArgs.redux.useThunk || false);
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

        const props: Props | {} = mounterArgs.props || creatorArgs.props || {};
        const TheComponent: ComponentType<Props | {}> = creatorArgs.component;

        const component: ReactWrapper<Props, object> = mount(
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
}

export default creator;
