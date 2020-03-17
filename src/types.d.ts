import { ComponentType, Context, ReactNode } from 'react';
import { ReactWrapper } from 'enzyme';
import { MockStoreEnhanced } from 'redux-mock-store';

declare global {
    interface PassThroughCompProps {
        children: ReactNode;
    }

    interface CreatorArgs<Props, State, Ctx> {
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

    interface MounterArgs<Props, State, Ctx> {
        props?: Props;
        reduxState?: State;
        initialRouterEntries?: [string];
        contextValue?: Ctx;
    }

    interface Mounter<Props, State> {
        component: ReactWrapper<Props, object>;
        store?: MockStoreEnhanced<State, object>;
    }
}
