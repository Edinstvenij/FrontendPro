import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
//  Engine
import store from "./engine/init/store";
import ErrorBoundary from "./engine/ErrorBoundary";
//  UI
import Header from "./ui/containers/Header";
//  Pages
import Main from './ui/pages/Main';
import About from "./ui/pages/About";
import Contact from "./ui/pages/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </ErrorBoundary>
);
