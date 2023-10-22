import Home from '@pages/Home';
import Show from '@pages/Show/Index';

import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/show',
		element: <Show />
	},
	{
		path: 'unavaible',
		element: <p> Opss ainda não temos essa página </p>,
	},
	{
		path: '*',
		element: <p> Opss ainda não temos essa página </p>,
	},
]);

export default router;
