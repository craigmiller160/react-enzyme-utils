import { ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

async function resolver<Props>(wrapper: ReactWrapper<Props, object>): Promise<void> {
    await act(async () => {
        await Promise.resolve(wrapper);
        await new Promise((resolve) => setImmediate(resolve));
        wrapper.update();
    });
}

export default resolver;
