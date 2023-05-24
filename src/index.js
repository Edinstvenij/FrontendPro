import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
//  Engine
import ErrorBoundary from "./engine/ErrorBoundary";
//  UI
import Header from "./ui/components/Header";
//  Pages
import Main from './ui/pages/Main';
import About from "./ui/pages/About";
import Contact from "./ui/pages/Contact";

const router = createBrowserRouter([{
    path: '/', element: <Main/>
}, {
    path: '/about', element: <About/>
}, {
    path: '/contact', element: <Contact/>
},])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <Header/>
        <RouterProvider router={router}/>
    </ErrorBoundary>
);
