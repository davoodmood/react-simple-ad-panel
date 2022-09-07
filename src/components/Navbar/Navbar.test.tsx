import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './Navbar';

test('renders learn react link', () => {
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    );
    const [OverviewLink] = screen.queryAllByText(/Overview/i);
    const [CampaignsLink] = screen.queryAllByText(/Campaigns/i);
    expect(OverviewLink).toBeInTheDocument();
    expect(CampaignsLink).toBeInTheDocument();
});
