import { ReactNode } from 'react';

declare global {
    interface PassThroughCompProps {
        children: ReactNode;
    }
}
