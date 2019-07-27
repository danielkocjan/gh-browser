import React from 'react';

interface OutsideLinkProps {
    to: string;
}

export const OutsideLink: React.FC<OutsideLinkProps> = props => (
    <a target="_blank" href={props.to} rel="noopener noreferrer">
        {props.children}
    </a>
);
