import React from 'react';
import ReactDOM from 'react-dom';
import WormLogo from './';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WormLogo />, div);
});
