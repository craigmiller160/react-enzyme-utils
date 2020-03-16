import React, { FC, ReactNode } from 'react';
import { MemoryRouter } from 'react-router';

interface Props {
    children: ReactNode;
}

const createTestRouter = (initialRouterEntries: Array<string>): FC<Props> => {
    const Router: FC<Props> = (props: Props) => {
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
