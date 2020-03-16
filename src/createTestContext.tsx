import React, { ReactNode, FC, Context } from 'react';

interface Props {
    children: ReactNode;
}

const createTestContext = (ContextType: Context<object>, contextValue: object): FC<Props> => {
    const TestContext: FC<Props> = (props: Props) => {
        const { children } = props;
        return (
            <ContextType.Provider value={ contextValue }>
                { children }
            </ContextType.Provider>
        );
    };
    return TestContext;
};

export default createTestContext;
