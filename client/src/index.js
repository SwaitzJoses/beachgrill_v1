import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Landing from './pages/Landing/Landing';
import Itempage from './pages/ItemsPage/Itempage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
       <Route index={true} path='/' element={<Landing/>} />
      <Route  path='/:adminURL' element={<Admin/>} />
      <Route  path='/item/:_id' element={<Itempage/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);
