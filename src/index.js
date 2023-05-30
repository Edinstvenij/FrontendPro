import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
//  Engine
import ErrorBoundary from "./engine/ErrorBoundary";
//  UI
import Header from "./ui/components/Header";
//  Pages
import Main from './ui/pages/Main';
import About from "./ui/pages/About";
import Contact from "./ui/pages/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </ErrorBoundary>
);
