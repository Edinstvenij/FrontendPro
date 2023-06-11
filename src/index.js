import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
//  Pages
import App from './ui/pages/App';
//  Components
import Footer from "./ui/components/Footer";
//  Engine
import store from "./engine/init/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
        <Footer/>
    </Provider>
);
