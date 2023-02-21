import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Error from './pages/Error';
import About from './pages/About';
import Details from './pages/Details';

const container = document.getElementById("root")
// Create a root.
const root = ReactDOM.createRoot(container)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Home />,
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
    element: <Error />,
  },
  {
    path: "*",
    element: <Error />

  }
])
root.render(
<React.StrictMode>
  <RouterProvider router={router} />
    </React.StrictMode>
    )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
