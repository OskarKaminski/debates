import React from 'react';
import { render } from 'react-dom';
import App from './App';

let root = document.createElement('div')
document.body.appendChild(root)

render(
    <div>
        <App/>
    </div>,
    root
);

