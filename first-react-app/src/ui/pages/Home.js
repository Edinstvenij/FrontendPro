import Header from "../containers/Header";
import Sidebar from '../containers/Sidebar';
import Main from "../containers/Main";
import '../../App.css';

function Home() {
    return (
        <div className="App">
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-auto bg-light sticky-top p-0">
                        <Sidebar/>
                    </div>
                    <div className="col-sm min-vh-100 p-0">
                        <Main/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
