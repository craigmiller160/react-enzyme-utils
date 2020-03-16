import React, { FC, Context } from 'react';
import PassThroughCompProps from './PassThroughCompProps';

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
