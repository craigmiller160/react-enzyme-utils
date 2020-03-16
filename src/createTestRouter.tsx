import React, { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode
}

const createTestRouter = (initialRouterEntries: Array<string>) => {
    const { MemoryRouter } = require('react-router');
    const Router: FC<Props>  = (props: Props) => (
        <MemoryRouter initialEntries={ initialRouterEntries }>
            { props.children }
        </MemoryRouter>
    );
    return Router;
};

export default createTestRouter;
