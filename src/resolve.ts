import { act } from 'react-dom/test-utils';

const resolve = async (mounter: Mounter<any, any>): Promise<Mounter<any, any>> => { // TODO figure out better type parameters
    await act(async () => {
        await Promise.resolve(mounter.component);
        await new Promise((resolve) => setImmediate(resolve));
        mounter.component.update();
    });
    return mounter;
};

export default resolve;

// TODO this will ultimately need to be able to handle class components too