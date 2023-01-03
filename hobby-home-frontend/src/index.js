import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import HobbyList from './components/HobbyList';
import Catalogue from './components/Catalogue';
import Categories from './components/Categories';
import EditHobby from './components/EditHobby';
import HobbyItem from './components/HobbyItem';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/HobbyList",
        element: <HobbyList />,
      },
      {
        path: "/HobbyItem/:id",
        element: <HobbyItem />,
      },
      {
        path: "/Catalogue",
        element: <Catalogue />,
      },
      {
        path: "/HobbyCategories",
        element: <Categories />,
      },
      {
        path: "/admin/Hobby/0",
        element: <EditHobby />,
      },
      {
        path: "/login",
        element: <Login />,
      },

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  
  </React.StrictMode>
);

