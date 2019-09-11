import React from 'react';
import ReactDOM from 'react-dom';
import StemLogo from './';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StemLogo title="Test Title" />, div);
});
