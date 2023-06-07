import './swapi.css';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-final-form'
//  Core
import {clear, setResponse, setUrlParam} from "../../../engine/core/swapiSlice";
//  Components
import FormSwapi from "../../components/swapi/Form";
import Sticker from "../../components/swapi/Sticker";
import {useState} from "react";
import Answer from "../../components/swapi/Answer";


function Swapi() {
    const response = useSelector((state) => JSON.stringify(state.swapi.response, null, 2)) ?? undefined;
    const [stickers, setStickers] = useState([])

    const dispatch = useDispatch();

    async function getAnswer(urlParam) {
        const url = 'https://swapi.dev/api/' + urlParam;
        return await fetch(url).then(promise => {
            if (promise.status !== 200) {
                throw Error;
            }
            return promise.json();
        });
    }

    function getStickers(urlParam) {
        const valuesUrl = urlParam.split('/');
        const stickers = [];

        for (let stickerName of valuesUrl) {
            if (stickerName.trim() !== '') {
                stickers.push(<Sticker key={stickerName} text={stickerName}/>);
            }
        }
        setStickers(stickers);
    }

    const onSubmit = async (data) => {
        const urlParam = data.url.trim();
        await getAnswer(urlParam).then((data) => {
            dispatch(setResponse(data));
            dispatch(setUrlParam(urlParam));
            getStickers(urlParam);
        });

    }
    const clearData = () => {
        dispatch(clear());
        setStickers([]);
    }

    return (<div className="container">

        <h1>SWAPI</h1>
        <div className="row mb-4">
            <Form
                onSubmit={onSubmit}
                render={FormSwapi}
            />
        </div>

        <Answer onClick={clearData} response={response} stickers={stickers}/>

    </div>);
}

export default Swapi;