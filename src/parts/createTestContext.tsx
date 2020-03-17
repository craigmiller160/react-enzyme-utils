import React, { FC, Context } from 'react';

function createTestContext<Ctx>(ContextType: Context<Ctx>, contextValue: Ctx): FC<PassThroughCompProps> {
    const TestContext: FC<PassThroughCompProps> = (props: PassThroughCompProps) => {
        const { children } = props;
        return (
            <ContextType.Provider value={ contextValue }>
                { children }
            </ContextType.Provider>
        );
    };
    return TestContext;
}

export default createTestContext;
