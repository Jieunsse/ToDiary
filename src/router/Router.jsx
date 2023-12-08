import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Error from '../pages/Error/Index';
import Home from '../pages/Home/Index';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <Error />,
  },
  {
    path: 'home',
    element: <Home />,
  },
]);

export default Router;
