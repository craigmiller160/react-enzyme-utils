import React, { FC, ComponentType } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MockStoreEnhanced } from 'redux-mock-store';
import createTestReduxProvider from './createTestReduxProvider';
import createTestRouter from './createTestRouter';
import createTestContext from './createTestContext';
import createDefaultComp from './createDefaultComp';

// TODO add an additional function that can be chained that resolves initialization promises

function creator<Props, State, Ctx>(creatorArgs: CreatorArgs<Props, State, Ctx>) {
    return function mounter(mounterArgs: MounterArgs<Props, State, Ctx> = {}): Mounter<Props, State> {
        let TestReduxProvider: FC<PassThroughCompProps> = createDefaultComp();
        let store: MockStoreEnhanced<State, object> | undefined;
        if (creatorArgs.redux) {
            const storeState = mounterArgs.reduxState || creatorArgs.redux.state;
            [ TestReduxProvider, store ] = createTestReduxProvider(storeState, creatorArgs.redux.useThunk || false);
        }

        let TestRouter: FC<PassThroughCompProps> = createDefaultComp();
        if (creatorArgs.router) {
            const initialEntries = mounterArgs.initialRouterEntries || creatorArgs.router.initialEntries;
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
