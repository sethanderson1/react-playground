import React from 'react';
import './denonym.css';

export default function Denonym(props) {

    return (
        <div className="denonym">
            A {props.name} comes from {props.country}
        </div>
    );
}