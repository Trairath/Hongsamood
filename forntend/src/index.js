import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import SignIn from "./routes/signin";
import SignUp from "./routes/signup";
import Album from "./routes/home";
import Book1 from './page/book1';
import Book2 from './page/book2';
import Book3 from './page/book3';
import Book4 from './page/book4';
import Book5 from './page/book5';
import Book6 from './page/book6';
import Book7 from './page/book7';
import Book8 from './page/book8';
import Book9 from './page/book9';
import Book10 from './page/book10';
import Book11 from './page/book11';
import Book12 from './page/book12';
import Myshelf from './routes/Myshelf';
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Album />,
  },
  {
    path: "/myshelf",
    element: <Myshelf />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/Book1",
    element: <Book1 />,
  },
  {
    path: "/Book2",
    element: <Book2 />,
  },
  {
    path: "/Book3",
    element: <Book3 />,
  },
  {
    path: "/Book4",
    element: <Book4 />,
  },
  {
    path: "/Book5",
    element: <Book5 />,
  },
  {
    path: "/Book6",
    element: <Book6 />,
  },
  {
    path: "/Book7",
    element: <Book7 />,
  },
  {
    path: "/Book8",
    element: <Book8 />,
  },
  {
    path: "/Book9",
    element: <Book9 />,
  },
  {
    path: "/Book10",
    element: <Book10 />,
  },
  {
    path: "/Book11",
    element: <Book11 />,
  },
  {
    path: "/Book12",
    element: <Book12 />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
