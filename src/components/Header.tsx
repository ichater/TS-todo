import * as React from 'react';

interface HeadingProps {
    heading: string
}

const Header: React.FunctionComponent<HeadingProps> = ({ heading }) => {
    return (
        <h1>{heading}</h1>
    )
};

export { Header };


