import React from 'react';
import ReactDOM from 'react-dom';
import LogoType from './';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogoType />, div);
});
