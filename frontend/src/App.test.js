import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('displays the message from the backend', async () => {
    axios.get.mockResolvedValueOnce({
        data: {message: 'Hello from the API in Express!'},
    });

    render(<App/>);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() => {
        expect(screen.getByText(/Hello from the API in Express!/i)).toBeInTheDocument();
    });
});
