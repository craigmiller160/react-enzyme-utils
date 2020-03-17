import React, { FC, Context } from 'react';

const createTestContext = (ContextType: Context<object>, contextValue: object): FC<PassThroughCompProps> => {
    const TestContext: FC<PassThroughCompProps> = (props: PassThroughCompProps) => {
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
