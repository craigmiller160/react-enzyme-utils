import React, { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode
}

const createTestRouter = async (initialRouterEntries: Array<string>): Promise<FC<Props>> => {
    const { MemoryRouter } = await import('react-router');
    const Router: FC<Props>  = (props: Props) => (
        <MemoryRouter initialEntries={ initialRouterEntries }>
            { props.children }
        </MemoryRouter>
    );
    return Router;
};

export default createTestRouter;
