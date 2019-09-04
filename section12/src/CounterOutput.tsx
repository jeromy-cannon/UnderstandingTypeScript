import * as React from 'react';

interface ICounterOutputProps {
    counter: number;
}

const counterOutput = (props: ICounterOutputProps) => {
    return <p>{props.counter}</p>;
}

export default counterOutput;