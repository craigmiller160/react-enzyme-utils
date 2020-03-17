import React, { FC } from 'react';

const createDefaultComp = (): FC<PassThroughCompProps> => (props: PassThroughCompProps): JSX.Element => {
    const { children } = props;
    return (
        <div>
            { children }
        </div>
    );
};

export default createDefaultComp;
