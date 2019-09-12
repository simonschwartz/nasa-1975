import React from 'react';
import ReactDOM from 'react-dom';
import Typography from './';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Typography tag="h2">Hello World</Typography>, div);
});
