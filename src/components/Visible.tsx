import {useState} from "react";

const Visible = () => {
    const [count, setCount] = useState<number>(1)

    return <div className="border p-6">
        <div className="text-lg">{count}</div>

        <button onClick={() => setCount(count + 1)} className="border p-4 bg-red-500">Increment</button>
    </div>
};

export default Visible;