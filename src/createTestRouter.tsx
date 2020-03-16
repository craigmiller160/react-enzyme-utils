import React, { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const createTestRouter = async (initialRouterEntries: Array<string>): Promise<FC<Props>> => {
    const { MemoryRouter } = await import('react-router');
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
