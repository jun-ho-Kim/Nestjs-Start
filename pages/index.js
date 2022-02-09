import { useState } from "react"
import NavBar from "../components/NavBar"

export default function hi() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <NavBar />
            <h1>hi {counter}</h1>
            <button onClick={() => setCounter((prv) => prv + 1)}>+</button>
            <style jsx global>{`
                a {
                    color: white
                }
            `}</style>

        </div>
    )
}