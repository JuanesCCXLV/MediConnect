import {createCrowserRouter} from 'react-router-dom';

export const router = createCrowserRouter([
    {
        path: '/',
        element: <Inicio />,
    },
    {
        path: '/agendarcita',
        element: <AgendarCita />,
    },
    {
        path: '/principal', 
        element: <Principal />,
    },
    {
        path: 'videollamada',
        element: <Videollamada />,
    }
]);