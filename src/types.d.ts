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
        context?: { // TODO make into an array
            type: Context<Ctx>;
            value: Ctx;
        };
        router?: {
            initialEntries: [string];
        };
    }

    interface MounterArgs<Props, State, Ctx> {
        props?: Props;
        reduxState?: State;
        initialRouterEntries?: [string];
        contextValue?: Ctx; // TODO make into an array... or an object with special keys? support multiple contexts
    }

    interface Mounter<Props, State> {
        component: ReactWrapper<Props, object>;
        store?: MockStoreEnhanced<State, object>;
    }
}
