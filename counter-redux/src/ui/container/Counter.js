import Button from "../components/Button";
import {decrement, increment} from "../../engine/core/counterSlice";
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const value = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch(increment());
    }
    const onDecrement = () => {
        dispatch(decrement());
    }
    return (
        <div>
            <div>
                Counter:{value}
            </div>
            <Button text='+' onClick={onIncrement}/>
            <Button text='-' onClick={onDecrement}/>
        </div>
    )
}
export default Counter;