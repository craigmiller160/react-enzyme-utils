import { ReactWrapper } from 'enzyme';
import { MockStoreEnhanced } from 'redux-mock-store';
import resolver from './resolver';

class Mounter<Props,State> {

    constructor(
        public component: ReactWrapper<Props, object>,
        public store?: MockStoreEnhanced<State, object>
    ) { }

    async resolve(): Promise<Mounter<Props, State>> {
        await resolver(this.component);
        return this;
    }

}

export default Mounter;