import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useState } from "react";


const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);

    const [inc, setInc] = useState(0);

    const addValue = Number(inc) || 0;

    return (
        <section>
            <p>Count: {count}</p>
            <button className="btn" onClick={() => dispatch(increment())}>+</button>
            <button className="btn" onClick={() => dispatch(decrement())}>-</button>

            <div>
                <input type="text" className="input" value={inc} onChange={(e) => setInc(e.target.value)} />
                <button className="btn" onClick={() => dispatch(incrementByAmount(addValue))}>Increase</button>
            </div>
        </section >
    )
}

export default Counter;