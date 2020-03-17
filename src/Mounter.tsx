import { ReactWrapper } from 'enzyme';
import { MockStoreEnhanced } from 'redux-mock-store';
import { act } from 'react-dom/test-utils';

class Mounter<Props,State> {

    constructor(
        public component: ReactWrapper<Props, object>,
        public store?: MockStoreEnhanced<State, object>
    ) { }

    async resolve(): Promise<Mounter<Props, State>> {
        await act(async () => {
            await Promise.resolve(this.component);
            await new Promise((resolve) => setImmediate(resolve));
            this.component.update();
        });
        return this;
    }

}

export default Mounter;