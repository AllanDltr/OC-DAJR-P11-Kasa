import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home';
import App from './App';
import Error404 from './pages/Error';
import About from './pages/About';
import Details from './pages/Details';

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/details/*",
    element: <Error404 />,
  },
  {
    path: "*",
    element: <Error404 />
  }
])
root.render(
<React.StrictMode>
  <RouterProvider router={router} />
    </React.StrictMode>
    )