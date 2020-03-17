import { ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

const resolve = async (component: ReactWrapper<object, object>) => { // TODO figure out better type parameters
    await act(async () => {
        await Promise.resolve(component);
        await new Promise((resolve) => setImmediate(resolve));
        component.update();
    });
};

export default resolve;

// TODO this will ultimately need to be able to handle class components too