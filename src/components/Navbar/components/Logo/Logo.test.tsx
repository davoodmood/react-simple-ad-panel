import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from '../Logo';

test('renders learn react link', () => {
    render(
        <MemoryRouter>
            <Logo showXs={'none'} showMd={'flex'} name={'Ad Panel'} />
        </MemoryRouter>
    );
    const [panelName] = screen.queryAllByText(/Ad Panel/i);
    expect(panelName).toBeInTheDocument();
});

