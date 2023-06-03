import Counter from "./ui/container/Counter";
import {Provider} from "react-redux";
import store from "./engine/init/store";

function App() {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
}

export default App;
