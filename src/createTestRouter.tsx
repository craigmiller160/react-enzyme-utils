import React, { FC } from 'react';
import { MemoryRouter } from 'react-router';

const createTestRouter = (initialRouterEntries: Array<string>): FC<PassThroughCompProps> => {
    const Router: FC<PassThroughCompProps> = (props: PassThroughCompProps) => {
        const { children } = props;
        return (
            <MemoryRouter initialEntries={ initialRouterEntries }>
                { children }
            </MemoryRouter>
        );
    };
    return Router;
};

export default createTestRouter;
